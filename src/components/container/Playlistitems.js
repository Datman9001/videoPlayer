import React from 'react';
import PlaylistItem from '../PlaylistItem';
import withLink from '../hoc/withLink';
import StylePlaylistItems from '../styles/StylePlaylistItems';

const PlaylistItemWithLink = withLink(PlaylistItem); 
 

const PlaylistItems = ({videos, active}) => (
    <StylePlaylistItems>
         {videos.map(video=>(
             <PlaylistItemWithLink
                 key={video.id}
                 video={video}
                 active={video.id === active.id ? true : false}
                 played={video.played}
             />
         ))}
    </StylePlaylistItems>
        
       
    )


export default PlaylistItems; 