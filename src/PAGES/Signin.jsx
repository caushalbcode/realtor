import React from 'react'
import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function Signin() {
  const [showPassword,setShowPassword] = useState(false)
  return (
    <section>
      <h1 className='text-3xl font-bold text-center py-6'>Sign In</h1>
      <div className='max-w-6xl mx-auto my-5 flex flex-wrap items-center'>
        <div className='lg:w-[50%] md:w-[67%] mx-4 md:m-auto'>
          <img 
          src='./signin.webp'
          className='w-full rounded-2xl'
          alt='signin img'
          />
        </div>
        <div className='mx-auto md:mt-6 lg:w-[40%] lg:ml-20 md:w-[67%]'>
          <form>
            <input 
                className='w-full rounded-lg h-8 px-5 py-6
                border-gray-300 border-2 text-lg focus:border-blue-500 focus:outline-none
                transition ease-in-outduration-300'
                placeholder='Email Address '
            />
            <div className='my-6 relative'>
                    <input 
                      type={showPassword?'text':'password'}
                      className='w-full rounded-lg h-8 px-5 py-6
                      border-gray-300 border-2 text-lg focus:border-blue-500 focus:outline-none
                      transition ease-in-outduration-300'
                      placeholder='Password '
                    />
                    {showPassword?(
                      <AiFillEye
                        className='cursor-pointer absolute right-4 top-[18px] text-[18px]'
                        onClick={()=>setShowPassword(false)}
                      />
                    ):(
                      <AiFillEyeInvisible
                      className='cursor-pointer absolute right-4 top-[18px] text-[18px]'
                      onClick={()=>setShowPassword(true)}
                      />
                    )}
                </div > 
                
                <div className='flex justify-between'>
                  <p>Don't Have An Account? <Link to='/sign-up' className='text-red-500'>Register</Link>
                  </p> 
                   <Link to='/forgot-password' className='text-blue-500'>Forgot Password</Link>
                </div>

                <Button title="Sign in" back="bg-blue-500" />  
                
                <div className='flex items-center before:border-t before:flex-1 before:border-gray-500
                after:border-t after:flex-1 after:border-gray-500'>
                  <p className='font-bold mx-3'>OR</p>
                </div>

                <Button title='Continue With Google' back="bg-red-500" pic='Fcgoogle'/>                
          </form>         
        </div>
      </div>
    </section>
  )
}
