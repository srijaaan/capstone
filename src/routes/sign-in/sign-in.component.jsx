import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
const SignIn = () => {
  const logGoogleUser = async()=>{
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log(userDocRef)
  }
  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </>
  )
}

export default SignIn