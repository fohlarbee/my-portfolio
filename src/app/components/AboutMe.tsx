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
    <section className="text-[#fff]" id='about'>
        <div className="md:grid md:grid-cols-2 gap-8 items-center px-8 py-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image
                src='/images/coding.jpg'
                alt="code"
                width={500}
                height={500} 
                className="rounded-md"
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className="font-semibold text-3xl md:text-5xl text-[#fff] my-4">About me</h2>
                <p className="text-base lg:text-lg">Welcome to my digital hub.
                    I’m a future-ready fullstack developer blending code with intelligence — literally. I specialize in building scalable, high-performance systems using NestJS, Next.js, and ElysiaJS, backed by clean database design and solid backend architecture. My workflow thrives on TypeScript, Node.js, and JavaScript, with smooth UIs crafted in HTML, CSS, and modern frontend frameworks.

                    But I don’t stop at code — I integrate Generative AI and Machine Learning into products that think, adapt, and deliver real value. From automating workflows to enhancing user experiences, I use AI as a core building block, not an afterthought.

                    With Git for version control, Redux for state management, and Firebase for real-time, cloud-powered apps, I keep codebases clean and teams synced. Whether it’s MongoDB, PostgreSQL, Microsoft Azure or scalable APIs via Express, I bring clarity to complexity.

                    Beyond building, I share. As a content creator on YouTube, I break down tech concepts, share dev journeys, and explore the latest in AI, software engineering, and beyond.

                    Let’s team up and turn next-gen ideas into actual impact.</p>
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
