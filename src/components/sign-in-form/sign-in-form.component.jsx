import "./sign-in-form.styles.scss";
import { useState, useEffect } from "react";
import {
  auth,
  SignInUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  useEffect(() => {
    const getRes = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
        console.log(userDocRef);
      }
    };
    getRes();
  }, []);

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await SignInUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      if (
        error.code === "auth/invalid-credential" ||
        error.code === "auth/user-not-found"
      )
        alert("Incorrect email or password");
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sigin with eamil and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
