import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collectionGroup } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2RSOWXo49KDHy0y7lOtPbxzBSyNb5LFI",
  authDomain: "crwn-clothing-db-123.firebaseapp.com",
  projectId: "crwn-clothing-db-123",
  storageBucket: "crwn-clothing-db-123.appspot.com",
  messagingSenderId: "639830398060",
  appId: "1:639830398060:web:35af810e50086c8296f449"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  // create/ set the document with the data from userAuth in my collection
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch(error) {
      console.log(error);
    }
  }

  //id user data exists
  // return userDoc
  return userDocRef;
}
