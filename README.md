# 🏥 Sanjeevni AI - Complete Healthcare Platform

A modern, cross-platform healthcare application with Node.js backend and responsive web frontend.

## 🎯 Project Structure

```
SanjeevniAI/
├── backend/                    # Node.js + Express API Server
│   ├── server.js              # Backend API (Port 3000)
│   ├── package.json
│   ├── signatures/            # Saved signature files
│   └── README.md
├── frontend/                   # Node.js + Tailwind CSS Web App
│   ├── server.js              # Frontend server (Port 8080)
│   ├── public/
│   │   ├── index.html         # Get Started page
│   │   ├── roles.html         # Role selection
│   │   ├── login.html         # Login/Register
│   │   ├── form.html          # Professional details form with signature
│   │   ├── dashboard.html     # Success dashboard
│   │   └── js/
│   │       └── signature.js   # Canvas signature capture
│   └── package.json
└── WORKING_DEMO.md
```

## ✨ Features

### Frontend (Windows Compatible)
- ✅ **Responsive Web Design** - Works on all devices and browsers
- ✅ **Tailwind CSS** - Modern, beautiful UI matching the iOS design
- ✅ **Multi-Step Form** - 3-step professional profile completion
- ✅ **Signature Capture** - HTML5 Canvas for touch/mouse signatures
- ✅ **Role-Based Flow** - Different forms for Doctor/NGO
- ✅ **Real-Time Validation** - Client-side form validation
- ✅ **Loading States** - Visual feedback during submission

### Backend
- ✅ **RESTful API** - POST endpoint for form submission
- ✅ **Signature Storage** - Saves PNG files with metadata
- ✅ **CORS Enabled** - Cross-origin requests supported
- ✅ **JSON Metadata** - Stores form data alongside signatures

## 🚀 Quick Start

### 1. Start the Backend Server

```powershell
cd backend
npm install
node server.js
```

✅ Backend running at: **http://localhost:3000**

### 2. Start the Frontend Server

```powershell
cd frontend
npm install
node server.js
```

✅ Frontend running at: **http://localhost:8080**

### 3. Open in Browser

Navigate to: **http://localhost:8080**

## 📱 Complete User Flow

### Get Started → Choose Role → Sign In → Complete Profile → Dashboard

1. **Get Started Page** (`/`)
   - Welcome screen with feature highlights
   - Dynamic greeting based on time
   - Smooth animations and transitions

2. **Role Selection** (`/roles`)
   - Choose: User, Doctor, or NGO
   - Visual role cards with icons
   - Interactive selection feedback

3. **Login Page** (`/login`)
   - Email and password fields
   - Role-specific welcome message
   - Toggle password visibility
   - Demo mode: accepts any credentials

4. **Professional Form** (`/form`) - For Doctor/NGO only
   - **Step 1**: Credentials
     - Full Name / NGO Name
     - License # / Registration #
   
   - **Step 2**: Professional Details
     - Specialization / Area of Operation
     - Hospital / Contact Person
   
   - **Step 3**: Digital Signature
     - HTML5 Canvas drawing
     - Mouse and touch support
     - Clear/reset functionality
     - Converts to base64 PNG

5. **Dashboard** (`/dashboard`)
   - Success confirmation
   - View saved signatures
   - Account management

## 🎨 Design Features

### Colors (Matching iOS App)
- **Primary**: Teal (`#14b8a6`)
- **Doctor Role**: Blue (`#3b82f6`)
- **NGO Role**: Indigo (`#6366f1`)
- **Gradients**: Smooth color transitions

### Fonts
- **Body**: Inria Serif (matching iOS)
- **Headings**: Caveat (cursive, matching iOS)

### UI Components
- Rounded corners (3xl radius)
- Soft shadows
- Hover effects
- Scale animations
- Gradient backgrounds

## 📡 API Integration

### Backend Endpoint

**POST** `http://localhost:3000/submit-form`

**Request Body:**
```json
{
  "role": "Doctor",
  "q1": "Dr. Jane Doe",
  "q2": "LICENSE-12345",
  "q3": "Cardiology",
  "q4": "City Hospital",
  "signatureBase64": "data:image/png;base64,iVBORw0KGgo..."
}
```

**Success Response:**
```json
{
  "ok": true,
  "file": "sig_1234567890.png"
}
```

### Data Storage

Signatures saved in `backend/signatures/`:
- `sig_[timestamp].png` - Signature image
- `sig_[timestamp].png.json` - Form metadata

Example metadata:
```json
{
  "filename": "sig_1234567890.png",
  "role": "Doctor",
  "q1": "Dr. Jane Doe",
  "q2": "LICENSE-12345",
  "q3": "Cardiology",
  "q4": "City Hospital",
  "createdAt": "2025-11-01T06:09:14.776Z"
}
```

## 🧪 Testing

### Manual Testing

1. Open http://localhost:8080 in your browser
2. Click "Get Started"
3. Select a role (Doctor or NGO)
4. Sign in with any email/password
5. Fill the 3-step form
6. Draw your signature
7. Submit and verify success

### Verify Saved Data

Check the `backend/signatures/` folder:
```powershell
cd backend\signatures
dir
```

You should see `.png` and `.json` files.

### API Testing

```powershell
cd backend
node test-submission.js
```

## 🌐 Browser Compatibility

✅ Chrome, Edge, Firefox, Safari  
✅ Desktop and Mobile  
✅ Touch and Mouse input  
✅ Windows, macOS, Linux  

## 📂 Files Created

### Frontend
- ✅ `frontend/server.js` - Express server
- ✅ `frontend/public/index.html` - Get Started page
- ✅ `frontend/public/roles.html` - Role selection
- ✅ `frontend/public/login.html` - Login page
- ✅ `frontend/public/form.html` - Professional form with signature
- ✅ `frontend/public/dashboard.html` - Success dashboard
- ✅ `frontend/public/js/signature.js` - Signature canvas logic
- ✅ `frontend/package.json` - Dependencies

### Backend
- ✅ `backend/server.js` - API server
- ✅ `backend/test-submission.js` - Test script
- ✅ `backend/signatures/` - Storage folder

## 🔧 Configuration

### Change Ports

**Backend** (default: 3000):
```javascript
// backend/server.js
const port = process.env.PORT || 3000;
```

**Frontend** (default: 8080):
```javascript
// frontend/server.js
const PORT = process.env.PORT || 8080;
```

### Change Backend URL

If backend runs on a different port/host:

```javascript
// frontend/public/form.html, line ~150
fetch('http://localhost:3000/submit-form', {
```

## 🚀 Deployment

### Deploy Backend
- Use Heroku, Railway, Render, or AWS
- Set environment variable: `PORT`
- Update frontend API URL

### Deploy Frontend
- Use Vercel, Netlify, or Azure Static Web Apps
- Build static files or deploy Node.js app
- Update backend URL in `form.html`

## 🔒 Security Considerations

⚠️ **This is a development setup.**

For production:
- [ ] Add authentication (JWT tokens)
- [ ] Implement HTTPS
- [ ] Add database (MongoDB/PostgreSQL)
- [ ] Validate file uploads
- [ ] Rate limiting
- [ ] Input sanitization
- [ ] Error logging
- [ ] Backup system

## 📊 Features Comparison

| Feature | iOS (Old) | Node.js (New) |
|---------|----------|---------------|
| Platform | macOS/iOS only | ✅ Windows, Mac, Linux, Mobile |
| Language | Swift | JavaScript |
| UI Framework | SwiftUI | HTML + Tailwind CSS |
| Signature | Canvas (Swift) | HTML5 Canvas |
| Backend | Node.js | Node.js |
| Database | None | File system (PNG + JSON) |
| Authentication | Demo | Demo |
| Responsive | Fixed | ✅ Responsive |

## 🎯 Next Steps

- [ ] Add user authentication
- [ ] Implement database storage
- [ ] Add email verification
- [ ] Create admin panel
- [ ] Add data export
- [ ] Implement search functionality
- [ ] Add file upload validation
- [ ] Create mobile app (React Native)

## 📝 Notes

- Frontend and backend run on different ports
- Backend must be running for form submission to work
- Signatures are stored as base64-encoded PNG images
- Demo mode: any email/password works for testing
- All form data is stored in JSON files
- macOS Swift/Xcode frontend has been removed

## 🎉 Summary

✅ **Node.js + Tailwind CSS frontend created**  
✅ **Same design pattern as iOS app**  
✅ **Windows compatible**  
✅ **Signature capture implemented**  
✅ **Connected to backend API**  
✅ **macOS frontend removed**  

**The system is now fully operational on Windows!** 🚀
