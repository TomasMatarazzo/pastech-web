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
    <div>
        <h2></h2>

        <video id = "vid" src={pasto}  loop="true" autoplay="autoplay" muted width="800" height="600" controls />

        <video src="youtu.be/MLeIBFYY6UY" controls="false"></video>
   </div>
  )
}

export default VideoPlayer