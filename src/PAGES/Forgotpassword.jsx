import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from '../components/Button'


export default function Forgotpassword() {
  const [email,setEmail]=useState('')

  async function onSubmit(e){
    e.preventdefault()
    try{
      const auth = getAuth();
      await sendPasswordResetEmail(auth,email)
      toast.success("Reset Email sent successfully. Check Your Inbox")
    } catch(error) {
      toast.error("This Email Is Not Registered With Us ")
    }
  }
  
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
        <form onSubmit={onSubmit}>
          <input 
              className='w-full rounded-lg h-8 px-5 py-6
              border-gray-300 border-2 text-lg focus:border-blue-500 focus:outline-none
              transition ease-in-outduration-300'
              placeholder='Email Address '
              onChange={(e)=>setEmail(e.target.value)}
          />
              
              <div className='flex justify-between'>
                <p>you Have already An Account? <Link to='/sign-up'>Register</Link>
                </p> 
        
              </div>

              <Button title="Reset" back="bg-blue-500" /> 
              <div className='flex items-center before:border-t  before:flex-1  before:border-gray-500 after:border-t after:flex-1 after:border-gray-500'>
               <p className='font-bold mx-3'>OR</p>
              </div>

            <Button type="button" click={true} title='Continue With Google' back='bg-red-500' pic='google' />
              
            </form>         
      </div>
    </div>
  </>

 )
}
