import React from "react";
import { useState } from "react";
import InputLabel from "../shared/InputLabel/index.jsx";
import Button from "../shared/Button/index.jsx";
import Header from "../Header/index.jsx";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <Header />
      <div className="signIn">
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
          value={user.password}
          onChange={handleChange}
        />
        <Button name="signIn" className="largeButton" text="Sign In" />
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
        onClick={navigate("/signup")}
      />
    </>
  );
}

export default SignIn;
