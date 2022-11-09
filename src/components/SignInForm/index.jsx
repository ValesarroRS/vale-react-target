import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usePostSignInMutation } from "services/targetApi";
import { setCredentials } from "store/auth.reducer";
import InputLabel from "components/shared/InputLabel";
import Button from "components/shared/Button";
import Header from "components/Header";
import SplitBar from "components/shared/SplitBar";
import Error from "components/shared/Error";
import styles from "./index.module.scss";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [
    signInRequest,
    { isLoading: signInLoading, isError: signInIsError, error: signInError },
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
          {!signInLoading && signInIsError && (
            <Error className="error">{signInError.data.error}</Error>
          )}
        </form>
        <Button
          name="forgotPassword"
          variant="smallLink"
          text="Forgot your password?"
        />
      </div>
      <Button
        variant="medium"
        name="connectWithFacebook"
        text="Connect with facebook"
      />
      <SplitBar />
      <Button
        name="SignUp"
        text="Sign Up"
        variant="small"
        onClick={() => navigate("/signup")}
      />
    </>
  );
}

export default SignIn;
