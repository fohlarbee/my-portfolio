"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenueOverlay from './MenueOverlay'



export default function Navbar() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  type NavType = {
    title: string,
    path: string
  }

   const navLinks: NavType[] = [
    {
      title:'about',
      path:'#about'
    },
    {
      title:'projects',
      path:'#projects'
    },
    {
      title:'contact me',
      path:'#contactme'
    },

  ]

  return (
    <nav className='sticky top-0 right-0 left-0 z-10 bg-[#181818] bg-opacity-90 border-b border-[#33353f]'>
        <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-8 my-3'>
            <Link href='/' className='text-2xl lg:text-5xl 
            font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-400 py-3 md:p-0 hover:text-[#fff]'>
            Dev.Fohlarbee</Link> 
            <div className="block md:hidden mobile-menu">
              {isNavOpen ?(
                <button onClick={() => setIsNavOpen(false)} className='flex items-center px-3 py-2 border rounded
                 border-slate-200 text-slate-200 hover:text-[#fff] hover:border-[#fff]'>
                  <XMarkIcon className='h-5 w-5' />
                  </button>
              )

                : 
                  (
                    <button onClick={() => setIsNavOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200'>
                      <Bars3Icon className='h-5 w-5' />
                      </button>
                )
              }
            </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mr-6'>
                  {navLinks.map((navlink, i) => (
                      <NavLink href={navlink.path} title={navlink.title}  key={i}/>
                    
                  ))}
                    
                </ul>

            </div>
            {isNavOpen ? <MenueOverlay /> : null}


        </div>
    </nav>
  )
}
