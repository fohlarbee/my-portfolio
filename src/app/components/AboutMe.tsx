"use client"
import React, {useTransition, useState} from 'react'
import Image from "next/image";
import TabButton from './TabButton';
import { TabData } from '../data/TabData';

export default function AboutMe() {
    const [tab, setTab] = useState('skills')
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
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h1 className="font-semibold text-3xl md:text-5xl text-[#fff] my-4">About me</h1>
                <p className="text-base lg:text-lg"> Welcome to my digital hub! I&#39;m a versatile developer proficient in a diverse range of technologies, including JavaScript, Node.js, and TypeScript. With a keen eye for design, I specialize in crafting captivating user interfaces using HTML and CSS, ensuring a seamless user experience across platforms. Leveraging Git for version control, I maintain clean and organized codebases, fostering collaboration and efficiency in development workflows. My expertise extends to Redux for state management, empowering applications with robust data handling capabilities. As a Firebase expert, I excel in building real-time applications that harness the power of the cloud. Additionally, I utilize Express for backend development and MongoDB for efficient database management. Beyond coding, I&#39;m an enthusiastic content creator on YouTube, where I share my insights and experiences in the ever-evolving tech landscape. Let&#39;s join forces and transform your ideas into impactful digital solutions!</p>
                <div className="flex flex-row mt-5">
                    <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>Skills</TabButton>
                    <TabButton selectTab={() => handleTabChange('certifications')} active={tab === 'certifications'}>Certifications</TabButton>
                    <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>Education</TabButton>
                   
                </div>
                <div className='mt-3'>
                    {TabData.find((t) => t.id === tab)?.content}
                </div>
            </div>

        </div>
    </section>
    )
}
