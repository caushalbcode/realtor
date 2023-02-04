import React from 'react'
import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { db } from '../Firebase'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { async } from '@firebase/util'
import { toast } from 'react-toastify'
import { doc, serverTimestamp, setDoc} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const navigate=useNavigate()
  const [showPassword,setShowPassword] = useState(false)
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

async  function onSubmit(e){
    e.preventDefault()
    try{
      const auth = getAuth();
      if(name===''){
        throw {code:'auth/no-name'}
      }
      const userCredential= await 
      createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredential)
      const user= userCredential.user
      updateProfile(user,{
        displayName:name
      })
      const userDetails = {
        'name':name,
        'email':email,
        'timestamp':serverTimestamp()
      }

      await setDoc(doc(db,"users",user.uid),userDetails)
      toast.success("Registration Successful")
      navigate('/')
    }catch(error){
        console.log(error)
        const msg = displayErrors(error.code)
        toast.error(msg)
    }
  }
  
  function displayErrors(code){
    switch(code){
      case 'auth/email-already-in-use':
        return "This Email is Already Registered "

      case 'auth/invalid-email':
        return "Invalid Email Address"

      case 'auth/weak-password':
        return "Password should be atleast 6 character long"

      case 'auth/no-name':
        return "Name is Requide"
      
      default:
        return "Something went wrong"
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
                transition ease-in-outduration-300 mb-5'
                placeholder='Enter Your Name'
                onClick={(e)=>setName(e.target.value)}
            />
            <input 
                className='w-full rounded-lg h-8 px-5 py-6
                border-gray-300 border-2 text-lg focus:border-blue-500 focus:outline-none
                transition ease-in-outduration-300 '
                placeholder='Email Address '
                onClick={(e)=>setEmail(e.target.value)}
            />
            <div className='my-6 relative'>
                    <input 
                      type={showPassword?'text':'password'}
                      className='w-full rounded-lg h-8 px-5 py-6
                      border-gray-300 border-2 text-lg focus:border-blue-500 focus:outline-none
                      transition ease-in-outduration-300 mb-3'
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
