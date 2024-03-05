
export default function ProjectTag({name, isSelected, onClick} : any) {
    const buttonStyles = isSelected 
        ? 'border-green-400'
        : 'border-slate-600 text-[#ADB7BE] hover:border-[#fff]'
  return (
    <button onClick={() => onClick(name)} className={`rounded-full border-2 w-20 h-20 cursor-pointer text-xl text-[#fff] ${buttonStyles}`}>
    {name}
  </button>
  )
}
