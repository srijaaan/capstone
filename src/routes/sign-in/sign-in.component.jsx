import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect} from '../../utils/firebase/firebase.utils'
const SignIn = () => {
  useEffect(()=>{
    const getRes = async () =>{
      const response = await getRedirectResult(auth)
      if(response){
        const userDocRef = await createUserDocumentFromAuth(response.user)
      }
    }
    getRes()
  },[])
  const logGoogleUser = async()=>{
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log(userDocRef)
  }
  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button>
    </>
  )
}

export default SignIn