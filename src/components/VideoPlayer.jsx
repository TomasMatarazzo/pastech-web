import React from 'react'
import ReactPlayer from "react-player"
import image from "../assets/images/01.jpg"
import pasto from "../assets/images/pasto.mp4"


const VideoPlayer = () => {


  return (
//     <div>
//         <h2></h2>
//         <video src="youtu.be/MLeIBFYY6UY" controls="false"></video>
//    </div>
    <div className='w-[60%] max-md:w-[100%] max-md:max-md:p-[0] p-16'>
        <video id = "vid" src={pasto}  loop="true" autoplay="autoplay" muted  playsInline controls />
   </div>
  )
}

export default VideoPlayer