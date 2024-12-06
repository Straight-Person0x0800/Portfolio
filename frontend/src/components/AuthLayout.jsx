import React from 'react'

function AuthLayout({ children ,title}) {
  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-center text-gray-800">{title}</h2>
              {children}
          </div>
      </div>
  )
}

export default AuthLayout;
