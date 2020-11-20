import React from 'react' 

import firebase from 'firebase/app'
import 'firebase/auth'
export default {

        AuthGoogleAccount: () => {
                const provider = new firebase.auth.GoogleAuthProvider()
                firebase.auth()
                        .signInWithPopup(provider)
                        .then(result => {
                                alert(`Bienvenido ${result.user.displayName} !!`)
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
        },

        CreateAccount: (email, password, nombres) => {
                firebase.auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then(result => {
                                result.user.updateProfile({
                                        displayName: nombres
                                })
                                const config = {
                                        url: 'http://localhost:5500'
                                }
                                result.user.sendEmailVerification(config)
                                        .catch(error => {
                                                console.log(error)
                                                alert(error.message)
                                        })
                                firebase.auth().signOut()
                                alert(`Bienvenido ${nombres}, por favor, haz el proceso de verificación `)
                        })
                        .catch(error => {
                                console.error(error)
                                alert(error.message)
                        }) 

        }
}