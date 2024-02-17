"use client"
import React, {useTransition, useState} from 'react'
import Image from "next/image";

export default function AboutMe() {
    const [tab, setTab] = useState('Skills')
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() =>  {
            setTab(id);
        })
    }

  return (
    <section className="text-[#fff]">
        <div className="md:grid md:grid-cols-2 gap-8 items-center px-8 py-4 ">
            <Image
                src='/images/coding.jpg'
                alt="code"
                width={500}
                height={500} 
                className="rounded-md"
            />
            <div>
                <h1 className=" font-semibold text-3xl md:text-5xl text-[#fff] mb-6">About me</h1>
                <p className="text-base lg:text-lg">
                Welcome to my digital hub! I'm a versatile developer proficient in a diverse range of technologies, including JavaScript, Node.js, and TypeScript. With a keen eye for design, I specialize in crafting captivating user interfaces using HTML and CSS, ensuring a seamless user experience across platforms. Leveraging Git for version control, I maintain clean and organized codebases, fostering collaboration and efficiency in development workflows. My expertise extends to Redux for state management, empowering applications with robust data handling capabilities. As a Firebase expert, I excel in building real-time applications that harness the power of the cloud. Additionally, I utilize Express for backend development and MongoDB for efficient database management. Beyond coding, I'm an enthusiastic content creator on YouTube, where I share my insights and experiences in the ever-evolving tech landscape. Let's join forces and transform your ideas into impactful digital solutions!

                </p>
                <div className="flex flex-row mt-5">
                    <span className="mr-4 border-b-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-300 border-[#fff] font-semibold md:text-4xl">Skills</span>
                    <span>Education</span>
                    <span>Experience</span>

                </div>
            </div>

        </div>
    </section>
    )
}
