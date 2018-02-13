import  firebase  from 'firebase';
import 'firebase/firestore';

import * as UserProviderTypes from '../constants/UserProviderType';

export const initFirebase = () =>{
    if (!firebase.apps.length) {
        const firebaseConfig = {
            apiKey: 'AIzaSyD_UE9Fp9EhcacnLtKvRF4a0TL7qvhjTFE',
            authDomain: 'social-monster-98d0c.firebaseapp.com',
            databaseURL: 'https://social-monster-98d0c.firebaseio.com/',
            storageBucket: 'gs://social-monster-98d0c.appspot.com/',
            projectId: 'social-monster-98d0c',
        };

        firebase.initializeApp(firebaseConfig);
    }
};

export const signIn = (providerType) => {
    const provider = getAuthProviderByType(providerType);

    return new Promise((resolve)=>{
        firebase.auth().signInWithPopup(provider).then(function(response) {
            resolve(response);
        }).catch(function(error) {
            throw error;
        });
    });
};


export const signOut = () => {
    return new Promise((resolve)=>{
        firebase.auth().signOut().then(function(response) {
            resolve();
        }).catch(function(error) {
            throw error;
        });
    });
};


export const onAuthStateChanged = () => {
    return new Promise((resolve)=>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                let userDocRef = firebase.firestore().doc(`users/${user.uid}`);

                const timestamp = firebase.firestore.FieldValue.serverTimestamp()

                userDocRef.get().then((doc) => {
                    if (doc.exists) {
                        console.log("User last Seen Updated",doc.data());
                        userDocRef.update({
                            lastSeen: timestamp
                        }).then(()=>{
                            userDocRef.get().then( (doc) => {
                                resolve(doc.data());
                            });
                        });
                    } else {
                        console.log("new User Created");
                        userDocRef.set({
                            displayName: user.displayName,
                            uid: user.uid,
                            lastSeen: timestamp
                        }).then(()=>{
                            userDocRef.get().then( (doc) => {
                                resolve(doc.data());
                            });
                        });
                    }
                }).catch((error) => {
                    throw error;
                });
            } else {
                resolve(null);
            }
        });
    });
};



export const getAuthProviderByType = (providerType) => {
    let provider;

    switch (providerType){
        case UserProviderTypes.FACEBOOK:
            provider = new firebase.auth.FacebookAuthProvider();
            break;
        case UserProviderTypes.TWITTER:
            provider = new firebase.auth.TwitterAuthProvider();
            break;
        case UserProviderTypes.MAIL:
            provider = new firebase.auth.EmailAuthProvider();
            break;
        default:
            provider = new firebase.auth.EmailAuthProvider();
            break;
    }

    return provider;
};

export const getIdToken = () => {
    return new Promise((resolve)=>{
        firebase.auth().currentUser.getIdToken(false).then(function(idToken) {
            resolve({
                uid:firebase.auth().currentUser.uid,
                token:idToken,
            });
        }).catch(function(error) {
            throw error;
        });
    });
};