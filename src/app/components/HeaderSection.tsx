"use client"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"


export default function HeaderSection() {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 
                className="text-white lg:text-6xl text-4xl font-extrabold mb-4">
                   <span></span>
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "Hi I'm Fohlarbee",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      'A Mobile app developer',
                      1000,
                      'Web developer',
                      1000,
                      'And a Youtuber',
                      1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                  </h1>
                <p className=" text-[#eeeeee] text-lg lg:text-xl">A fullstack mobile dev with three(3) and counting years of experience </p>
                <div className="my-5">
                  <button className="px-6 py-4 rounded-full mr-4 bg-green-100 hover:bg-slate-200 text-black mb-4 border border-solid border-white-500">Hire me</button>
                  <button className="px-6 py-4 rounded-full bg-transparent text-[#000] border hover:bg-slate-700 bg-gradient-to-br from-blue-400 to-green-300">Download cv</button>
                </div>
            </div>
            
            <div className="col-span-5 place-self-center mt-6 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] relative">
                    <Image 
                      src="/images/icon.png"
                      alt="logo"
                      width={250}
                      height={250}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      />

                </div>
                
            </div>
        </div>
    </section>
  )
}
