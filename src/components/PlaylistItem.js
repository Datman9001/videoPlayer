import React from 'react'
import StylePlaylistItem from './styles/StylePlaylistItem'
  

const PlaylistItem = ({active, video, played}) => (
 
         <StylePlaylistItem active={active} played={played}>
           <div className='Ty-player__video-nr'>{video.num}</div> 
           <div className='Ty-player__video-name'>{video.title}</div> 
           <div className='Ty-player__video-time'>{video.duration}</div>  
            
         </StylePlaylistItem>
    )


export default PlaylistItem