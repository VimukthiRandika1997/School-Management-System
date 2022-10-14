import React from 'react'
import {FaIcons,FaGoogle,FaApple,FaGithub, FaEnvelope,FaKey} from 'react-icons/fa'
import {useForm} from 'react-hook-form'

function login() {
    const {
        handleSubmit,
        register,
        formState:{errors},
    } = useForm();

    const submitHandler = (data) => {}

    
  return (
    <main className='flex flex-col items-center justify-center min-h-screen py-2 bg-primary'>
        <div className='flex flex-row  justify-center w-full bg-white flex=1 py-2 px=20 text-center w-2/3 max-w-4xl rounded-2xl shadow-2xl'>
            <div className='w-3/5 p-5'>
                <div>
                    <h2 className='mb-5 text-2xl font-bold text-primary'> Sign in to your Account</h2>
                </div>
                <div className='inline-block w-10 mb-10 border border-primary '>  </div>
                <div className='flex flex-row justify-center mb-10 space-between'>
                    <FaGoogle className='mx-1 rounded-full'/>
                    <FaApple className='mx-1 rounded'/>
                    <FaGithub className='mx-1 rounded size-big'/>
                </div>
                <div className='flex flex-col items-center mb-10 '>
                        <form  onSubmit={handleSubmit(submitHandler)} >
                            <div className='flex flex-row items-center w-64 p-4 mb-10 bg-gray-100 rounded-full'>
                            
                                <FaEnvelope className='mr-2'/>
                                <input type='email' 
                                    {...register('email', {required: 'Please enter the email'})}
                                    
                                    id='email' className='bg-gray-100 ' placeholder='Email'
                                />
                            
                                {errors.email && <h1> {errors.email.message} </h1>}
                                
                            </div>
                            <div className='flex items-center w-64 p-4 mb-10 bg-gray-100 rounded-full'> 
                                <FaKey className='mr-2 '/>
                                <input type='password' id='password' className='bg-gray-100 ' placeholder='Password'/>
                            </div>

                            <a href='#' className='inline-block px-12 py-3 font-semibold border-2 rounded-full hover:bg-primary hover:text-white ' > Sign In</a>
                    
                        </form>
                </div>
            </div>
            <div className='w-2/5 p-5 px-5 text-white rounded-br-2xl bg-primary rounded-tr-2xl py-36 '>
                <h2 className='mb-5 text-2xl font-bold'> Welcome to SMS </h2>
                <div className='inline-block w-10 mb-2 border border-white'></div>
                <p className='mb-10'> This is the School Management System</p>
                <a href='./signup/1' className='inline-block px-12 py-3 font-semibold border-2 rounded-full hover:bg-white hover:text-primary ' > SignUp</a>
            </div>
        </div>
        
    </main>
  )
}

export default login