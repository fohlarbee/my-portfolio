// type Params = {
//     active: boolean
//     selectTab: Function
//     children: string 
// }

export default function TabButton({active, selectTab, children} : any) {
  const buttonClass = active ?  
  'text-[#fff] border-b border-green-400' 
  :  'text-[#ADB7DE]'

  return (
    <button onClick={selectTab}>
      <p className={`mr-4 font-semibold md:text-2xl ${buttonClass}`}>
      {children}
      </p>
    </button>
  )
}
