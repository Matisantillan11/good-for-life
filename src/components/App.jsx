import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'


import HomePage from '../pages/Home'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'
import firebase from 'firebase/app'
import ConfigFirebase from '../firebase/config/ConfigFirebase'
firebase.initializeApp(ConfigFirebase)
const App = () =>(
    <BrowserRouter>
        
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/SignIn" component={SignIn}/>
                <Route exact path="/Register" component={Register}/>
            </Switch>
        
    </BrowserRouter>
)

export default App