import React from 'react'
import PlaylistHeader from '../PlaylistHeader'
import PlaylistItems from './Playlistitems'
import NightMode from '../Nightmode'
import StylePlaylist from '../styles/StylePlaylist'
 

const Playlist = ({videos, active, nightModeCallback, nightMode}) => (
        <StylePlaylist>
            <NightMode nightModeCallback={nightModeCallback} nightMode={nightMode}/>
            <PlaylistHeader active={active} total={videos.length}/>
            <PlaylistItems videos={videos} active={active}/>
        </StylePlaylist>
    )


export default Playlist