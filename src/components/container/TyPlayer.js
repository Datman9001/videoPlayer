import React,{ useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import Video from '../Video'
import Playlist from './Playlist'
import StyleTyPlayer from '../styles/StyleTyplayer'
 

const theme = {
    bgcolor: '#353535',
    bgcolorItem: '#414141',
    bgcolorItemActive: '#405c63',
    bgcolorPlayed: '#526d4e',
    border: 'none',
    borderPlayed: 'none',
    color: '#fff',
}

const themeLight = {
    bgcolor: '#fff',
  bgcolorItem: '#fff',
  bgcolorItemActive: '#80a7b1',
  bgcolorPlayed: '#7d9979',
  border: '1px solid #353535',
  borderPlayed: 'none',
  color: '#353535',
}

const TyPlayer = ({match, history, location}) => {
    const videos = JSON.parse(document.querySelector('[name="videos"]').value)
     

    const [state, setState] = useState({
        videos: videos.playlist,
        activeVideo: videos.playlist[0],
        nightMode: true,
        playlistId: videos.playlistId,
        autoplay: false,

    })

    useEffect(() => {
        const videoID = match.params.activeVideo;
         
        if( videoID !== undefined ){
            const newActiveVideo = state.videos.findIndex(
                video => video.id === videoID
            )
            setState( prev =>({
                ...prev,
                activeVideo: prev.videos[newActiveVideo],
                autoplay: location.autoplay
            }));

        } else {
            history.push({
                pathname: `/${state.activeVideo.id}`,
                autoplay: false
            })
        }
        
    }, [history, location.autoplay, match.params.activeVideo,state.activeVideo.id, state.videos])

    const nightModeCallback = () => {
          setState({...state, nightMode: !state.nightMode})

    }

    const endCallback = () => {
        const videoId = match.params.activeVideo;
        const currentVideoIndex = state.videos.findIndex(
              video => video.id === videoId
         );
        

        const nextVideo = currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1;

           history.push({
              pathname: `${state.videos[nextVideo].id}`,
              autoplay: false
          })

    }

    const progressCallBack = e =>{
        if(e.playedSeconds > 10 && e.playedSeconds < 11 ){
           const videos = [...state.videos];
           const playedVideo = videos.find(
               video => video.id === state.activeVideo.id,
           );
           playedVideo.played = true;

           setState(prevState => ({...prevState, videos}));
        }  
    }
    
    return(
        <ThemeProvider theme={state.nightMode ? theme : themeLight}>
            {state.videos !== null ? (
                <StyleTyPlayer>
                    <Video
                        active={state.activeVideo}
                        autoplay={state.autoplay}
                        endCallBack={endCallback}
                        progressCallBack={progressCallBack}
                    />
                    <Playlist
                        videos={state.videos}
                        active={state.activeVideo}
                        nightModeCallback={nightModeCallback}
                        nightMode={state.nightMode}
                    />
                </StyleTyPlayer>
            ) : null }
            

        </ThemeProvider>
        
    )
}

export default TyPlayer