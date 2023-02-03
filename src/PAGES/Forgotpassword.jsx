import React from 'react'
import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Button from '../components/Button'


export default function Forgotpassword() {
  const [showPassword,setShowPassword] = useState(false)
  
  return (
    <>
    <h1 className='text-3xl font-bold text-center py-6'>Forgot Password</h1>
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
              
              <div className='flex justify-between'>
                <p>you Have already An Account? <Link to='/sign-up'>Register</Link>
                </p> 
        
              </div>

              <Button title="Reset" back="bg-blue-500" />  
              
            </form>         
      </div>
    </div>
  </>

 )
}
