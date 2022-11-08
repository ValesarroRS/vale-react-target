import { React, useState } from "react";
import InputLabel from "components/shared/InputLabel";
import Button from "components/shared/Button";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";
import { usePostSignInMutation } from "services/targetApi";
import { setCredentials, revokeCredentials, useAuth } from "store/auth.reducer";
import { useDispatch } from "react-redux";
import Error from "components/shared/Error";
import SplitBar from "components/shared/SplitBar";
import styles from "./index.module.scss";

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
      isLoading: signInLoading,
      isError: signInIsError,
      isSuccess: signInSucess,
      error: signInError,
    },
  ] = usePostSignInMutation();

  let credentials;
  async function login(event) {
    event.preventDefault();
    const body = {
      user: {
        email: user.email,
        password: user.password,
      },
    };
    try {
      credentials = await signInRequest(body).unwrap();
    } catch (error) {
      return;
    }
    dispatch(setCredentials(credentials));
    navigate("/welcome");
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  if (storeUser) {
    return (
      <>
        <div> Already logged in! {storeUser}</div>;
        <Button
          className="mediumButton"
          text="Log out!"
          onClick={dispatch(revokeCredentials(credentials))}
        />
      </>
    );
  }
  if (signInSucess) {
    return <div> Success yay!</div>;
  }
  return (
    <>
      <Header />
      <div className={styles.signIn}>
        <form onSubmit={login}>
          {signInLoading && <p>Loading</p>}
          <InputLabel
            name="email"
            id="emailField"
            labelText="Email"
            value={user.email}
            onChange={handleChange}
          />
          <InputLabel
            name="password"
            id="passwordField"
            labelText="Password"
            type="password"
            value={user.password}
            onChange={handleChange}
          />
          <Button name="signIn" text="Sign In" />
          {signInIsError && <Error>{signInError.data.error}</Error>}
        </form>
        <Button
          name="forgotPassword"
          isSmallLink
          text="Forgot your password?"
        />
      </div>
      <Button
        isMedium
        name="connectWithFacebook"
        text="Connect with facebook"
      />
      <SplitBar />
      <Button
        name="SignUp"
        text="Sign Up"
        isSmall
        onClick={() => navigate("/signup")}
      />
    </>
  );
}

export default SignIn;
