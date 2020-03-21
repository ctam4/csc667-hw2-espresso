import React from 'react'
import{Switch, Route} from 'react-router-dom'
import Home from './Home'
import bdiaz666 from './bdiaz666'
import jason1819 from './jason1819'
import ctam4 from './ctam4'

const Routes = () =>(
    <Switch>
        <Route path='/' exact component ={Home}/>
        <Route path='/bdiaz666' exact component={bdiaz666} />
        <Route path='/ctam4' exact component={ctam4} />
        <Route path='/jason1819' exact component={jason1819} />
    </Switch>
)
export default Routes;