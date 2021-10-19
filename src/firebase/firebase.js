import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAoMy8WcWi4mnt2INwwINUCI5KAT3N2z2w",
    authDomain: "crwn-db-2ba64.firebaseapp.com",
    projectId: "crwn-db-2ba64",
    storageBucket: "crwn-db-2ba64.appspot.com",
    messagingSenderId: "642030373800",
    appId: "1:642030373800:web:df46c2c20692c871e92b9d",
    measurementId: "G-HDVV2Y3K4S"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
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
        })
      } catch (error) {
        console.log('error creating user -', error.message);
      }
    }

    return 
  }

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;