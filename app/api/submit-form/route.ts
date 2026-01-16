import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Submission from '@/models/Submission'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    await dbConnect()

    const body = await request.json()
    const { role, signatureBase64, ...formData } = body

    if (!signatureBase64) {
      return NextResponse.json({ error: 'Missing signatureBase64' }, { status: 400 })
    }

    // Parse base64 image
    const matches = signatureBase64.match(/^data:(image\/[a-zA-Z+]+);base64,(.+)$/)
    let buffer: Buffer
    let ext = 'png'

    if (matches && matches.length === 3) {
      const mime = matches[1]
      const b64 = matches[2]
      ext = mime.split('/')[1]
      buffer = Buffer.from(b64, 'base64')
    } else {
      buffer = Buffer.from(signatureBase64, 'base64')
    }

    // Save signature file
    const outDir = path.join(process.cwd(), 'public', 'signatures')
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true })
    }

    const filename = `sig_${Date.now()}.${ext}`
    const filePath = path.join(outDir, filename)
    await fs.promises.writeFile(filePath, buffer)

    // Generate unique ID for NGOs
    let uniqueId = null
    if (role === 'NGO') {
      uniqueId = 'NGO-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9).toUpperCase()
    }

    // Save to MongoDB
    const submission = new Submission({
      role: role || null,
      ...formData,
      signatureFilename: filename,
      signatureBase64: signatureBase64.substring(0, 100) + '...',
      uniqueId: uniqueId,
      submittedAt: new Date(),
      status: 'pending'
    })

    await submission.save()

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      uniqueId: uniqueId,
      submissionId: submission._id
    })

  } catch (error: any) {
    console.error('Error submitting form:', error)
    return NextResponse.json(
      { error: 'Failed to submit form', details: error.message },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    await dbConnect()
    const submissions = await Submission.find({}).sort({ submittedAt: -1 }).limit(50)
    return NextResponse.json({ submissions })
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Failed to fetch submissions', details: error.message },
      { status: 500 }
    )
  }
}
