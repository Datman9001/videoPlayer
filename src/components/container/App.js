import React from 'react'
import TyPlayer from './TyPlayer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyle from '../styles/GlobalStyle'

 
const App = () => (
    <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={TyPlayer}/>
        <Route exact path='/:activeVideo' component={TyPlayer}/>
     </Switch>
     <GlobalStyle/>
    </>
    </BrowserRouter>
    
)

export default App;