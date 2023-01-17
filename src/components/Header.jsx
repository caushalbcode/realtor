import React from 'react'

export default function Header() {
  return (
    <div className='bg-white border-b-2 shodow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-5 max-w-6xl mx-auto'>
            <div>
                <img
                src='https://b2bweb.realtor.com/web_assets/rdc/SFMC-lp-images/2021/RDC%20-tagline-wide.png'
                alt='Realtor Logo'
                className='h-5'/>
            </div>
            <div>
                <ul className='flex space-x-6'>
                    <li className='py-3 text-slate-500 text-sm font-semibold'>Home </li>
                    <li className='py-3 text-slate-500 text-sm font-semibold'>Offers</li>
                    <li className='py-3 text-slate-500 text-sm font-semibold'>Sign In</li>
                </ul>

            </div>
        </header>
    </div>
  )
}
