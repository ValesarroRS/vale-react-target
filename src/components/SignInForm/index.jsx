import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usePostSignInMutation } from "services/targetApi";
import { setCredentials } from "store/auth.reducer";
import InputLabel from "components/shared/InputLabel";
import Button from "components/shared/Button";
import Header from "components/Header";

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
      <div className="signIn">
        <form onSubmit={login}>
          {signInLoading && <p>Loading</p>}
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
          {signInIsError && <p className="error">{signInError.data.error}</p>}
        </form>
        <Button
          name="forgotPassword"
          className="smallLinkText"
          text="Forgot your password?"
        />
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
