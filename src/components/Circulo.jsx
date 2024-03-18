import React from 'react'
import PropTypes from 'prop-types'

const Circulo = ({color,position,bg}) => {


    
  return (
    <div className={`max-md:w-[70vw] z-20 max-md:h-[70vw]   ${position} absolute items-center justify-center  ${bg} w-[15vw] h-[15vw] border-[4px] border-dashed border-${color} rounded-full flex`}>
        <div className={`bg-${color}  w-[12vw] h-[12vw] max-md:w-[65vw] max-md:h-[65vw] rounded-full m-auto'`}></div>
    </div>
  )
}

Circulo.propTypes = {
    color:PropTypes.string,
    position:PropTypes.string,
  };

export default Circulo