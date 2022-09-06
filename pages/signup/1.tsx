import Form from 'antd/es/form/Form'
import React from 'react'

function signup() {
  return (
    <main className='min-h-screen bg-primary ' >
      <div className="flex flex-col min-h-screen bg-grey-lighter">
                  <div className="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
                      <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
                          <h1 className="mb-8 text-3xl text-center">Create Account (1/2)</h1>
                          <input 
                              type="text"
                              className="block w-full p-3 mb-4 border rounded border-grey-light"
                              name="fullname"
                              placeholder="Full Name" />

                          <input 
                              type="text"
                              className="block w-full p-3 mb-4 border rounded border-grey-light"
                              name="email"
                              placeholder="Email" />

                          <input 
                              type="password"
                              className="block w-full p-3 mb-4 border rounded border-grey-light"
                              name="password"
                              placeholder="Password" />
                          <input 
                              type="password"
                              className="block w-full p-3 mb-4 border rounded border-grey-light"
                              name="confirm_password"
                              placeholder="Confirm Password" />

                          <a href='../login/'
                              className="inline-block w-full p-5 py-3 my-1 text-center text-white rounded bg-primary align-items-center " 
                          >Next page (1/2)</a>
                      </div>

                      <div className="mt-6 text-white">
                          Already have an account?   
                          <a className="mx-3 no-underline border-b border-blue text-blue" href="../login/">
                              Log in
                          </a>.
                      </div>
                  </div>
              </div>
    </main>
  )
}

export default signup