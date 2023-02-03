import React from 'react'
import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { db } from '../Firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { async } from '@firebase/util'


export default function Signup() {
  const [showPassword,setShowPassword] = useState(false)
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

async  function onSubmit(e){
    e.preventDefault()
    try{
      const auth = getAuth();
      const userCredential= await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredential)
      const user= userCredential.user
      console.log(user)
    }catch(error){
        console.log(error)
    }
  }
  
  return (
    <section>
      <h1 className='text-3xl font-bold text-center py-6'>Sign Up</h1>
      <div className='max-w-6xl mx-auto my-5 flex flex-wrap items-center'>
        <div className='lg:w-[50%] md:w-[67%] mx-4 md:m-auto'>
          <img 
          src='./signin.webp'
          className='w-full rounded-2xl'
          alt='sign-up img'
          />
        </div>
        <div className='mx-auto md:mt-6 lg:w-[40%] lg:ml-20 md:w-[67%]'>
          <form>
          <input 
                className='w-full rounded-lg h-8 px-5 py-6
                border-gray-300 border-2 text-lg focus:border-blue-500 focus:outline-none
                transition ease-in-outduration-300'
                placeholder='Enter Your Name'
                onClick={(e)=>setName(e.target.value)}
            />
            <input 
                className='w-full rounded-lg h-8 px-5 py-6
                border-gray-300 border-2 text-lg focus:border-blue-500 focus:outline-none
                transition ease-in-outduration-300'
                placeholder='Email Address '
                onClick={(e)=>setEmail(e.target.value)}
            />
            <div className='my-6 relative'>
                    <input 
                      type={showPassword?'text':'password'}
                      className='w-full rounded-lg h-8 px-5 py-6
                      border-gray-300 border-2 text-lg focus:border-blue-500 focus:outline-none
                      transition ease-in-outduration-300'
                      placeholder='Password '
                      onClick={(e)=>setPassword(e.target.value)}
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
                  <p>Don't Have An Account? 
                  </p> 
                   <Link to='/forgot-password' className='text-blue-500 '>Forgot Password</Link>
                </div>

                <Button title="Sign Up" back="bg-blue-500" />  
                
                <div className='flex items-center before:border-t before:flex-1 before:border-gray-500
                after:border-t after:flex-1 after:border-gray-500'>
                  <p className='font-bold mx-3'>OR</p>
                </div>

                <Button title='Continue With Google' back="bg-red-500"/>                
          </form>         
        </div>
      </div>
    </section>

  )
}
