import { motion } from "framer-motion";

const tabVariants = {
  default: {width:0},
  active:{width: "calc(100% - 0.75rem)"}, 
}
export default function TabButton({active, selectTab, children} : any) {
  const buttonClass = active ?  
  'text-[#fff]' 
  :  'text-[#ADB7DE]'

  return (
    <button onClick={selectTab}>
      <p className={`mr-4 font-semibold md:text-2xl hover:bg-clip-text hover:text-green-100 ${buttonClass}`}>
      {children}
      </p> 
      <motion.div
        variants={tabVariants}
        animate={active ? "active" : "default"}
        className="h-1 w-1/2 bg-green-700 rounded-full mt-2 mr-3"
      >

      </motion.div>
    </button>
  )
}
