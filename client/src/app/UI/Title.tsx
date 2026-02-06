import React from 'react'

interface Type {
    title1?:string,
    title2?:string,
}
const Title:React.FC<Type> = ({title1="",title2=""}) => {
  return (
    <div className="grid gap-2 py-3">
        <h1 className="text-[30px] font-bold  ">{title1} <span className="text-secondary">{title2}</span></h1>
        <div className='w-14 h-0.75 bg-primary items-center  ' />
    </div>
  )
}

export default Title