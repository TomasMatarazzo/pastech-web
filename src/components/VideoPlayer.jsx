import React from 'react'
import ReactPlayer from "react-player"

const VideoPlayer = () => {


  return (
//     <div>
//         <h2></h2>
//         <video id = "vid" src={video}  loop="true" autoplay="autoplay" muted width="800" height="600" controls />
//    </div>
    <div >
      <ReactPlayer
        url="https://player.vimeo.com/video/918543074?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
        frameborder="0" controls loop autoplay volume muted playing ={true}
        width={750}
        height={600}
      />
    </div>
  )
}

export default VideoPlayer