 "use client";
import React from 'react'

import AnimatedNumbers from "react-animated-numbers"

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
    },
    {
        metric:"Experience",
        value:"3",
    },
]
const AchievmentSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='border-[#33353f] border rounded-md py-8 px-17 flex flex-row items-center justify-between'>
            {achievementList.map((achievement, i) => (
                <div key={i} className="flex flex-col items-center justify-center mx-4">
                    <h2 className="text-4xl font-bold text-[#fff] flex flex-row">
                        {achievement.prefix}
                       <AnimatedNumbers
                        includeComma
                        locale='en-NG'
                        animateToNumber={parseInt(achievement.value)}
                        className='text-4xl font-bold text-[#fff]'
                        transitions={(index) => ({
                            type: "spring",
                            duration: 140 * (index + 0.3),
                            mass: 1,
                            // from: { opacity: 0, transform: "translateY(-40px)" },

                        })}
                       />
                         {achievement.postfix}

                    </h2>
                    <p className="text-[#ADB7BE] text-lg">{achievement.metric}</p>
                </div>

            ))}
        </div>
    </div>
  )
}

export default AchievmentSection