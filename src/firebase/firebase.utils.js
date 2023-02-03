import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const config = {
    apiKey: "AIzaSyAxVbB4LOfvUtDBZ0YIZ0A9WdSwZnvr7kg",
    authDomain: "crown-app-1153c.firebaseapp.com",
    projectId: "crown-app-1153c",
    storageBucket: "crown-app-1153c.appspot.com",
    messagingSenderId: "934436756936",
    appId: "1:934436756936:web:0bbba28d8ce52b5001b4fd",
    measurementId: "G-H98M3T5QZR"
};

firebase.initializeApp(config);

export const createUserProfileDocuments = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;