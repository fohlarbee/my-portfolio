import Link from 'next/link'
import React from 'react';


export default function EmailSection() {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-4 gap-2'>
        <div>
            <h5 className='text-[#fff] text-2xl font-semibold text-transparent md:text-3xl bg-gradient-to-r from-green-400 to-blue-300 bg-clip-text'>Let&#39;s connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md font-semibold mt-2 '>I&#39m a remote Full-Stack dev from Nigeria, connect with me let&39;s get to create somthing beautiful together</p>
        <div className='socials flex flex-row gap-2'>
            <Link href='https://github.com/fohlarbee'>
                <img src="" alt="" />
            </Link>
            <Link href='https://x.com/fohlarbee'>
                <img src="" alt="" />
            </Link>

        </div>
        </div>
        <div className='flex flex-col gap-4'>
            <label htmlFor="email" className='text-[#fff]'></label>
            <input type="text" />

        </div>
       
    </section>
  )
}
