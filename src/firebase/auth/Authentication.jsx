import React from 'react' 
import { Redirect } from 'react-router-dom'

import firebase from 'firebase/app'
import 'firebase/auth'

const swal = require('sweetalert2')

export default {
        AuthGoogleAccount: () => {
                const provider = new firebase.auth.GoogleAuthProvider()
                firebase.auth()
                        .signInWithPopup(provider)
                        .then(result => {
                                <Redirect to="/"/>
                        })
                        .catch(error => {
                                console.log(error)
                                alert(error.message)
                        })
        },
        
        AuthFacebookAccount:() =>{
                const provider = new firebase.auth.FacebookAuthProvider()
                firebase.auth()
                        .signInWithPopup(provider)
                        .then(result =>{
                                alert(`Bienvendo ${result.user.displayName} !!`)
                        })
                        .catch(error =>{
                                console.error(error)
                                alert(error.message)
                        })                
        },
        
        AuthTwitterAccount:  () =>{
                const provider = new firebase.auth.TwitterAuthProvider()
        
                firebase.auth()
                        .signInWithPopup(provider)
                        .then(result =>{
                                alert (`Bienvenido ${result.user.displayName} !!`)
                        })
                        .catch(error =>{
                                console.error(error)
                                alert(error.message)
                        })
        }

}