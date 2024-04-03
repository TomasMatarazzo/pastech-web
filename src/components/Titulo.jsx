import React from 'react'

const Titulo = ({titulo,bg,padding}) => {
  return (
    <section className={`flex justify-center items-center xl:padding-1  mt-[40px] max-md:pt-[40px] max-md:text-center ${bg} ${padding}`}>
    <div className={`flex relative  justify-center items-center flex-col rounded-[2%] p-16 pb-4 ${padding}`}>
        <h1 className= {` border-b-[2px] border-dashed border-first-green inline-block py-2  pb-0 text-4xl leading-[56px] max-md:text-[32px] font-bold text-first-green font-[Roboto]`}>{titulo}</h1>
    </div>
</section>
  )
}

export default Titulo