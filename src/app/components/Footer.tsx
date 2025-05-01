import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353f] border-l-transparent border-r-transparent text-[#fff]'>
        <div className=' container p-12 flex justify-between items-center mx-auto'>
            <Link href='/' className='text-sm lg:text-2xl 
            font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-400 py-3 md:p-0 hover:text-[#fff]'>
            Dev.Fohlarbee</Link> 
            <p className='text-slate-600 text-sm lg:text-2xl '>All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer