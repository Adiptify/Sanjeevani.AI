'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/login')
      return
    }
    const email = localStorage.getItem('userEmail') || 'user@example.com'
    setUserEmail(email)
  }, [router])

  const logout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userEmail')
    router.push('/')
  }

  return (
    <div className="min-h-full bg-gradient-to-b from-teal-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <svg className="w-10 h-10 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
            </svg>
            <h1 className="caveat text-3xl font-bold text-gray-800">Sanjeevni AI</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{userEmail}</span>
            <button onClick={logout} className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
              Sign Out
            </button>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h2>
          <p className="text-gray-600">Welcome to your health dashboard</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Appointments</p>
                <p className="text-3xl font-bold text-teal-600">2</p>
              </div>
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Health Score</p>
                <p className="text-3xl font-bold text-blue-600">85%</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Messages</p>
                <p className="text-3xl font-bold text-indigo-600">5</p>
              </div>
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="flex flex-col items-center justify-center p-6 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors">
              <svg className="w-10 h-10 text-teal-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span className="font-semibold text-gray-800">Book Appointment</span>
            </button>

            <button className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
              <svg className="w-10 h-10 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
              <span className="font-semibold text-gray-800">AI Chatbot</span>
            </button>

            <button className="flex flex-col items-center justify-center p-6 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors">
              <svg className="w-10 h-10 text-indigo-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <span className="font-semibold text-gray-800">Health Records</span>
            </button>

            <button className="flex flex-col items-center justify-center p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors">
              <svg className="w-10 h-10 text-pink-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              <span className="font-semibold text-gray-800">Medicine Matrix</span>
            </button>
          </div>
        </div>
      </main>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)}></div>
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Appointments</h2>
                <button onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-teal-50 rounded-xl p-4 border-l-4 border-teal-500">
                  <h4 className="font-semibold text-gray-800">Dr. Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Cardiologist</p>
                  <p className="text-sm text-gray-700 mt-2">Nov 3, 2026 - 10:30 AM</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-teal-500 text-white text-xs rounded-full">Confirmed</span>
                </div>

                <div className="bg-teal-50 rounded-xl p-4 border-l-4 border-teal-500">
                  <h4 className="font-semibold text-gray-800">Dr. Michael Chen</h4>
                  <p className="text-sm text-gray-600">General Physician</p>
                  <p className="text-sm text-gray-700 mt-2">Nov 5, 2026 - 2:00 PM</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-teal-500 text-white text-xs rounded-full">Confirmed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
