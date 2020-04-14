import React from 'react'
import StyleNightmode from './styles/StyleNightmode'
 
  
 
const NightMode = ({nightModeCallback, nightMode}) => (
         <StyleNightmode>
        <div>
            NightMode
        </div>
         <label className='switch'>
             <input 
             type="checkbox" 
             checked={nightMode}
             onChange={nightModeCallback}   
               />
              <span className="slider round" /> 
         </label> 


         </StyleNightmode>
             
         
    )


export default NightMode