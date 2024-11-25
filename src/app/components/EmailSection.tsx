"use client"
import GithubLogo from "../../../public/github.svg";
import LinkedInLogo from "../../../public/linkedin.svg";
import TwitterLogo from "../../../public/twitter.svg";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const EmailSection = () => { 
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit  = async(e: any) => {
        setLoading(true);
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        };
        const JSONData = JSON.stringify(data);
        const endpoint = 'api/send';
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSONData
        }
        const response = await fetch(endpoint, options);
        if(response.status === 200) {
            e.target.reset();
            setLoading(false);
            const responseData = await response.json();
            setEmailSubmitted(true);
            return responseData; 
        }else{
            setLoading(false);
            console.error("Error", response.status, await response.json());
        }
    }
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id="contactme">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-700 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/2 "></div>
            <div className="z-10">
                <h5
                className="text-xl font-bold text-[#fff] my-2"
                >Let&apos;s connect </h5>
                <p
                className="text-[#ADB7BE] text-lg mb-4 max-w-md"
                >
                    {""}
                    I am always open to new opportunities, collaborations, and projects. Feel free to reach out to me via email or any of my social media handles.
                </p>
                <div className="socials flex flex-row gap-3">
                   <Link href="https://github.com/fohlarbee" className="bg-[#fff] rounded-lg ">
                          <Image src={GithubLogo} alt="Github Logo" 
                          />
                   </Link> 
                     <Link href="https://www.linkedin.com/in/samuel-olanrewaju-abimbola-037212255">
                              <Image src={LinkedInLogo} alt="LinkedIn Logo" />
                    </Link>
                    <Link href="https://x.com/fohlarbee"  className="bg-[#fff] rounded-lg" >
                              <Image src={TwitterLogo} alt="Twitter Logo" />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                    <label htmlFor="name" 
                    className="text-[#fff] block  text-sm font-medium mb-2">Your name</label>
                    <input 
                    name="name"
                    type="text"
                    id="name"
                    required
                    placeholder="johndoe"
                    className="bg-[#18191e] text-[#fff] p-2 rounded-lg border-[#33353f] placeholder-[#9ca2a9] text-sm block w-full mb-4 " 
                    />
                    <label htmlFor="email" 
                    className="text-[#fff] block  text-sm font-medium mb-2">Your email</label>
                    <input 
                    name="email"
                    type="email"
                    id="email"
                    required
                    placeholder="johndoe@gmail.com"
                    className="bg-[#18191e] text-[#fff] p-2 rounded-lg border-[#33353f] placeholder-[#9ca2a9] text-sm block w-full " 
                    />
                    </div>
                   <div className="mb-">
                    <label htmlFor="subject" 
                        className="text-[#fff] block text-sm font-medium mb-2">Subject</label>
                        <input 
                        name="subject"
                        type="text"
                        id="subject"
                        required
                        placeholder="Short title of your message"
                        className="bg-[#18191e] text-[#fff] p-2 rounded-lg border-[#33353f] placeholder-[#9ca2a9] text-sm block w-full " 
                        />
                   </div>
                   <div>
                    <label htmlFor="message" className="text-[#fff] block mb-2 font-medium my-3">
                        Message
                    </label>
                    <textarea 
                    name="message" 
                    id="message"
                    className="bg-[#18191e] text-[#fff] p-2 rounded-lg border-[#33353f] placeholder-[#9ca2a9] text-sm block w-full h-32"
                    placeholder="Your message here"
                    />
                   </div>
                   <button
                   type="submit"
                   className="bg-[#1A5319] text-[#fff] py-2 px-4 rounded-lg mt-4 w-full hover:bg-[#333] hover:text-[#fff] transition duration-300"
                   >
                            {loading ? "Sending..." : "Send Message"}
                   </button>
                   {emailSubmitted && 
                   (  <p className="text-green-500 text-sm mt-4">
                    Email submitted successfully
                    </p>
                )
                 
                   }
                
                </form>
            </div>

        </section>
    )
}