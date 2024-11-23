"use client"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"


export default function HeaderSection() {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 
                className="text-white lg:text-6xl text-4xl font-extra-bold mb-4">
                   <span></span>
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "Hi I'm Fohlarbee",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      'An algorithm enthusiast',
                      1000,
                      'An activist',
                      1000,
                      'And a lonly soul',
                      1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                  </h1>
                <p className=" text-[#adb7be] text-lg lg:text-xl">A backend developer, database designer, and algorithm enthusiast with over 3 years of experience. </p>
                <div className="my-5">
                  <a href="https://calendly.com/d/cqt3-gmd-fqy/one-off-meeting-hire-me"
                  target="_blank" rel="noopener noreferrer"
                  >
                    <button className="px-6 py-4 rounded-full mr-4 bg-green-100 hover:bg-slate-200 text-black mb-4 border border-solid border-white-500  w-full sm:w-fit">Hire me</button>
                  </a>
                  <a href="/resume.docx" download='my-resume.docx'>
                  <button
                   className="px-6 py-4 rounded-full bg-transparent text-[#fff] font-extrabold hover:bg-slate-300 bg-gradient-to-br from-green-700 to-green-70  w-full sm:w-fit">Download cv</button>
                  </a>
                 
                </div>
            </div>
            
            <div className="col-span-5 place-self-center mt-6 lg:mt-0 mb-5">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
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
