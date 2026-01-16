'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type RoleType = 'User' | 'Doctor' | 'NGO' | null

export default function RolesPage() {
  const [selectedRole, setSelectedRole] = useState<RoleType>(null)
  const router = useRouter()

  const selectRole = (role: RoleType) => {
    setSelectedRole(role)
  }

  const continueToLogin = () => {
    if (selectedRole) {
      localStorage.setItem('selectedRole', selectedRole)
      router.push('/login')
    }
  }

  return (
    <div className="min-h-full flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-teal-50 to-white">
      {/* Header */}
      <div className="text-center mb-12">
        <svg className="w-12 h-12 text-teal-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
        </svg>
        <h1 className="caveat text-5xl font-bold text-gray-800 mb-2">Choose Your Role</h1>
        <p className="text-gray-600">Select how you'll use Sanjeevni AI</p>
      </div>

      {/* Role Cards */}
      <div className="max-w-2xl w-full space-y-4 mb-8">
        {/* User Role */}
        <div 
          onClick={() => selectRole('User')} 
          className={`bg-white rounded-3xl p-6 shadow-xl cursor-pointer transition-all hover:scale-102 border-4 ${
            selectedRole === 'User' ? 'border-teal-500' : 'border-transparent'
          }`}
        >
          <div className="flex items-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800">User</h3>
              <p className="text-gray-600">Access personalized healthcare services</p>
            </div>
            <div className="ml-4">
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                selectedRole === 'User' ? 'bg-teal-500 border-teal-500' : 'border-gray-300'
              }`}>
                {selectedRole === 'User' && (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Doctor Role */}
        <div 
          onClick={() => selectRole('Doctor')} 
          className={`bg-white rounded-3xl p-6 shadow-xl cursor-pointer transition-all hover:scale-102 border-4 ${
            selectedRole === 'Doctor' ? 'border-blue-500' : 'border-transparent'
          }`}
        >
          <div className="flex items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800">Doctor</h3>
              <p className="text-gray-600">Provide expert medical consultations</p>
            </div>
            <div className="ml-4">
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                selectedRole === 'Doctor' ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
              }`}>
                {selectedRole === 'Doctor' && (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* NGO Role */}
        <div 
          onClick={() => selectRole('NGO')} 
          className={`bg-white rounded-3xl p-6 shadow-xl cursor-pointer transition-all hover:scale-102 border-4 ${
            selectedRole === 'NGO' ? 'border-indigo-500' : 'border-transparent'
          }`}
        >
          <div className="flex items-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800">NGO</h3>
              <p className="text-gray-600">Serve communities with healthcare outreach</p>
            </div>
            <div className="ml-4">
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                selectedRole === 'NGO' ? 'bg-indigo-500 border-indigo-500' : 'border-gray-300'
              }`}>
                {selectedRole === 'NGO' && (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <button 
        disabled={!selectedRole}
        onClick={continueToLogin}
        className={`text-lg font-semibold py-4 px-12 rounded-2xl shadow-lg transition-all duration-300 ${
          selectedRole 
            ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:shadow-2xl transform hover:scale-105 cursor-pointer' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Continue
        <svg className="inline-block w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </button>
    </div>
  )
}
