import {CodeBracketIcon, EyeIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';

type Params = {
    imagUrl: string,
    title: string,
    desc: string,
    gitUrl: string,
    previewUrl: string
}

export default function ProjectCard({imagUrl, title, desc, gitUrl, previewUrl} : Params) {
  return (
    <div className=" relative group">
        <div className="h-52 md:72" 
        style={{background: `url(${imagUrl})`, backgroundSize:'cover'}}>
        </div>
        <div className=" hidden justify-center items-center overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0  group-hover:bg-opacity-50 group-hover:flex transition-all duration-500">
            <Link href={gitUrl}  target='_blank'className='relative mr-4 w-14 h-14 rounded-full border-[#ADB7BE] border-4 hover:border-[#fff] group/link'>
                <CodeBracketIcon  className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#fff] '/>
            </Link>
            <Link href={previewUrl} target='_blank' className='relative w-14 h-14 rounded-full border-[#ADB7BE] border-4 hover:border-[#fff] group/link'>
                <EyeIcon  className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#fff] '/>
            </Link>
        </div>
        <div className="rounded-b-xl text=[#fff] py-4 px-4 bg-[#181818] ">
            <h4 className="text-[#fff] text-lg font-semibold md:text-xl mb-2" >{title}</h4>
            <p className="text-[#ADB7bE]">{desc}</p>
        </div>
</div>
    
  )
}
