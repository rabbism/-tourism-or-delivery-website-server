import { getAuth,signInWithPopup,onAuthStateChanged,signOut, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../firebase/firebase.initioliz';

initializeAuthentication();
const useFirebase =() =>{
    const[user,setUser] =useState('')
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn = () =>{
       return signInWithPopup(auth, googleProvider)
       
   
    }
    useEffect(() => {
        const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
  setUser(user)
  } 
});
}, [])
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    return {
        user,
        googleSignIn,
        logOut
    }
}
export default useFirebase;