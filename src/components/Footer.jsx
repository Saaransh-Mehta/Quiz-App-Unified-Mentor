import { Brain } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='flex justify-between h-[130px] bg-slate-600'>
        <div className='flex gap-2 m-5 company-name'>
            <Brain color='#f9ae65'/>
            <h1 className='text-2xl font-semibold bebas-neue tracking-wide cursor-pointer text-[#f9ae65]'>HelloQuiz</h1>
        
        </div>
        <div className='footer-content m-5'>
            <h1 className='bebas-neue tracking-wide cursor-pointer text-[#f9ae65]'>Providing Tech since 2024</h1>
        </div>
    </div>
    </>
  )
}

export default Footer