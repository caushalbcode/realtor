import React from 'react'
import { useState } from 'react'
import { getAuth } from 'firebase/auth'

export default function Profile() {
    const [auth]= getAuth()
    const [name,setName]=useState('Kaushal')
    const [email,setEmail]=useState('kk.baghel7818@gmail.com')
  return (
    <>
        <div className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
            <h1 className='text-center text-3xl font-bold mt-6'>My Profile</h1>

            <div className='w-full md:w-[50%] px-5 mt-6'>
                <form>
                    <input type="text"
                    value={name}
                    disabled
                    className='mb-6 text-xl w-full px-4 py-2 text-gray-700 border-gray-400 outline-none border-1 rounded focus:border-gray-600'
                    />
                    <input type="email"
                    value={email}
                    disabled
                    className='mb-6 text-xl w-full px-4 py-2 text-gray-700 border-gray-400 outline-none border-1 rounded focus:border-gray-600'
                    />
                </form>

                <div className='flex justify-between text-lg'>
                    <p>Do you want to change your name ?  
                        <span className='text-red-600 hover:text-red-800 cursor-pointer transition duration-200 ease-in-out'> Edit</span>
                    </p>
                    <p className='text-blue-600 hover:text-blue-800 cursor-pointer transition duration-200 ease-in-out'>Sign out</p>
                </div>

            </div>
        </div>
    </>
  )
}
