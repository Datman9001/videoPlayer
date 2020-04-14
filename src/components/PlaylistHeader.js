import React from 'react'
import StylePlaylistHeader from './styles/StylePlaylistHeader'
import StyledJourney from './styles/StyleJourney'

  

const PlaylistHeader = ({active, total}) => (
         <StylePlaylistHeader>
           <p>{active.title}</p>
           <StyledJourney>
              {active.num} / {total}
           </StyledJourney>
         </StylePlaylistHeader>
    )


export default PlaylistHeader