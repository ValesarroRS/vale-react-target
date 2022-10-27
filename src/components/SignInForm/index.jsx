import React from "react";
import { useState } from "react";
import InputLabel from "../shared/InputLabel/index.jsx";
import Button from "../shared/Button/index.jsx";
import Header from "../Header/index.jsx";
import { useNavigate } from "react-router-dom";
import { usePostSignInMutation } from "../../services/targetApi.js";
import { setCredentials, useAuth } from "../../store/auth.reducer";
import { useDispatch } from "react-redux";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user: storeUser } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [
    signInRequest,
    {
      data: signInData,
      isLoading: signInLoading,
      isError: signInIsError,
      isSuccess: signInSucess,
      error: signInError,
    },
  ] = usePostSignInMutation();

  async function login(e) {
    e.preventDefault();
    const body = {
      user: {
        email: user.email,
        password: user.password,
      },
    };
    let credentials;
    try {
      credentials = await signInRequest(body).unwrap();
    } catch (error) {
      return;
    }
    dispatch(setCredentials(credentials));
    // Aca va el navigate al home :p
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  if (storeUser) {
    return <div> Already logged in! {storeUser}</div>;
  }
  if (signInSucess) {
    return <div> Success yay!</div>;
  }
  return (
    <>
      <Header />
      <div className="signIn">
        <form onSubmit={login}>
          {signInLoading ? <p>Loading</p> : null}
          <InputLabel
            className="inputName"
            name="email"
            id="emailField"
            labelText="Email"
            value={user.email}
            onChange={handleChange}
          />
          <InputLabel
            className="inputName"
            name="password"
            id="passwordField"
            labelText="Password"
            type="password"
            value={user.password}
            onChange={handleChange}
          />
          <Button name="signIn" className="largeButton" text="Sign In" />
          {signInIsError ? (
            <p className="error">{signInError.data.error}</p>
          ) : null}
        </form>
        <p className="forgotPassword">Forgot your password?</p>
      </div>
      <Button
        className="mediumButton"
        name="connectWithFacebook"
        text="Connect with facebook"
      />
      <p className="splitBar" />
      <Button
        name="SignUp"
        text="Sign Up"
        className="smallButton"
        onClick={() => navigate("/signup")}
      />
    </>
  );
}

export default SignIn;
