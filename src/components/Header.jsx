import React from 'react'
import { useLocation,useNavigate,usenavigation } from 'react-router-dom'

export default function Header() {

    const location = useLocation()
    const navigate = useNavigate()

    function macthroute(route){
        if(route===location.pathname){
            return true
        }
    }
  return (
    <div className='bg-white border-b-2 shodow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-5 max-w-6xl mx-auto'>
            <div>
                <img
                src='https://b2bweb.realtor.com/web_assets/rdc/SFMC-lp-images/2021/RDC%20-tagline-wide.png'
                alt='Realtor Logo'
                className='h-8 cursor-pointer'
                onClick={()=>navigate('/')}/>
            </div>
            <div>
                <ul className='flex space-x-8'>
                    <li className={`cursor pointer py-3 text-slate-500 text-sm font-semibold border-b-[3px]
                          border-b-transparent ${macthroute('/') && 'text-black border-b-red-500'}
                        `}
                         onClick={()=>navigate('/')}
                    >
                    Home
                    </li>
                    <li className={`cursor pointer py-3 text-slate-500 text-sm font-semibold border-b-[3px]
                          border-b-transparent ${macthroute('/offers') && 'text-black border-b-red-500'}
                        `}
                         onClick={()=>navigate('/offers')}
                    >
                    Offers
                    </li>
                    <li className={`cursor pointer py-3 text-slate-500 text-sm font-semibold border-b-[3px]
                          border-b-transparent ${macthroute('/sign-in') && 'text-black border-b-red-500'}
                        `}
                         onClick={()=>navigate('/sign-in')}
                    >
                    Sign-in
                    </li>
                    </ul>

            </div>
        </header>
    </div>
  )
}
