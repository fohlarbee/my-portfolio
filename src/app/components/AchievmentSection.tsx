 "use client";
import React from 'react';
import dynamic from 'next/dynamic';


const AnimatedNumbers = dynamic(() => 
    import('react-animated-numbers'), { ssr: false });

const achievementList = [
    {
        metric:"Projects",
        value:"10",
        postfix:"+"
    },
    {
        metric:"Clients",
        value:"5",
        prefix:"~"
    },
    {
        metric:"Awards",
        value:"6",
        prefix:"~"
    },
    {
        metric:"Experience",
        value:"3",
        postfix:"Yrs",
    },
]
const AchievmentSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='border-[#33353f] border rounded-md py-8 px-1 flex flex-row items-center justify-between'>
            {achievementList.map((achievement, i) => (
                <div key={i} className="flex flex-col items-center justify-center mx-4 overflow-hidden">
                    <h2 
                    className="md:text-4xl text-lg font-bold flex flex-row text-green-500">
                        {achievement.prefix}
                       <AnimatedNumbers
                        includeComma
                        locale='en-NG'
                        animateToNumber={parseInt(achievement.value)}
                        className='font-bold'
                        transitions={(index) => ({
                            type: "spring",
                            duration: 140 * (index + 0.3),
                            mass: 1,
                            // from: { opacity: 0, transform: "translateY(-40px)" },

                        })}
                       />
                         {achievement.postfix}

                    </h2>
                    <p className="text-[#ADB7BE] text-xs sm:text-2xl ">{achievement.metric}</p>
                </div>

            ))}
        </div>
    </div>
  )
}

export default AchievmentSection