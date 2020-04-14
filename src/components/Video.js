import React from 'react'
import ReactPlayer from 'react-player'
import StyleVideoWrapper from './styles/StyleVideoWrapper'
import StyleVideo from './styles/StyleVideo'
 
  

const Video = ({active, autoplay, endCallBack, progressCallBack})=> (
    <StyleVideo>
        <StyleVideoWrapper>
        
            <ReactPlayer
                width='100%'
                height='100%'
                style={{position:"absolute", top: "0"}}
                playing={autoplay}
                controls={true}
                url={active.video}
                onEnded={endCallBack}
                onProgress={progressCallBack}
            />
        </StyleVideoWrapper>
    </StyleVideo>
          
    )


export default Video