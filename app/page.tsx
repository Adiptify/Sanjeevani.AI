'use client'

import Link from 'next/link'
import { useRef } from 'react'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null)
  const animationData = require('../public/online-doctor.json')

  const scrollFeatures = (direction: 'left' | 'right') => {
    if (featuresRef.current) {
      const scrollAmount = 400
      featuresRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      title: 'AI-Powered Healthcare',
      description: 'Instant health support with advanced AI technology'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ),
      title: 'Smart Health Records',
      description: 'Access your medical records anytime, anywhere'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      title: 'Expert Consultation',
      description: 'Connect with healthcare professionals instantly'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      ),
      title: '24/7 Availability',
      description: 'Healthcare support available round the clock'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      ),
      title: 'Secure & Private',
      description: 'Your health data is encrypted and protected'
    }
  ]

  const reviews = [
    {
      name: 'Priya Sharma',
      role: 'Patient',
      rating: 5,
      comment: 'Sanjeevni AI has transformed how I manage my health. The AI chatbot is incredibly helpful and the doctors are very professional.',
      avatar: 'PS'
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Cardiologist',
      rating: 5,
      comment: 'As a doctor, this platform makes it easy to connect with patients and provide quality care remotely. Highly recommended!',
      avatar: 'RK'
    },
    {
      name: 'Anita Desai',
      role: 'NGO Coordinator',
      rating: 5,
      comment: 'The perfect solution for our community healthcare initiatives. Easy to use and very effective in reaching underserved areas.',
      avatar: 'AD'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center md:text-left animate-fade-in">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <svg className="w-20 h-20 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
              </svg>
            </div>
            <h1 className="caveat text-7xl md:text-8xl font-bold text-gray-800 mb-4">Sanjeevni AI</h1>
            <p className="text-gray-600 text-xl md:text-2xl mb-12">Your Intelligent Health Companion</p>
            
            <Link href="/roles" className="bg-gradient-to-r from-teal-500 to-teal-600 text-white text-xl font-semibold py-5 px-16 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 inline-block">
              Get Started
              <svg className="inline-block w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>

          {/* Right Side - Lottie Animation */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-2xl">
              <Lottie 
                animationData={animationData} 
                loop={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Features</h2>
            <p className="text-gray-600 text-lg">Discover what makes Sanjeevni AI special</p>
          </div>
          
          <div className="relative">
            <button 
              onClick={() => scrollFeatures('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-teal-50 transition-colors"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            <div 
              ref={featuresRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-12"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-xl min-w-[350px] snap-center border-2 border-teal-50 hover:border-teal-200 transition-all hover:scale-105"
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={() => scrollFeatures('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-teal-50 transition-colors"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Sanjeevni AI is revolutionizing healthcare accessibility through cutting-edge artificial intelligence 
              and seamless digital experiences. Our mission is to make quality healthcare available to everyone, everywhere.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">10K+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Active Users</h3>
              <p className="text-gray-600">Trusted by thousands of patients</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">500+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Medical Experts</h3>
              <p className="text-gray-600">Qualified doctors ready to help</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">24/7</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Support Available</h3>
              <p className="text-gray-600">Always here when you need us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
            <p className="text-gray-600 text-lg">Real experiences from real people</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border-2 border-teal-50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-600 italic">&ldquo;{review.comment}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Company Details */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-teal-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                </svg>
                <h3 className="caveat text-2xl font-bold">Sanjeevni AI</h3>
              </div>
              <p className="text-gray-400 text-sm">Your trusted healthcare companion powered by AI</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/roles" className="hover:text-teal-400 transition-colors">Get Started</Link></li>
                <li><Link href="/login" className="hover:text-teal-400 transition-colors">Login</Link></li>
                <li><Link href="/dashboard" className="hover:text-teal-400 transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AI Health Chatbot</li>
                <li>Doctor Consultation</li>
                <li>Health Records</li>
                <li>Medicine Matrix</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Email: support@sanjeevniai.com</li>
                <li>Phone: +91 1800-XXX-XXXX</li>
                <li>Address: Mumbai, India</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Sanjeevni AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
