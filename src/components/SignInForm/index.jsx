import React from "react";
import { useState } from "react";
import InputLabel from "../shared/InputLabel/index.jsx";
import Button from "../shared/Button/index.jsx";

function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div className="signIn">
      <InputLabel
        name="emailField"
        id="emailField"
        labelText="Email"
        value=""
        placeholder="emailField"
        onChange={handleChange}
      />
      <InputLabel
        name="passwordField"
        id="passwordField"
        labelText="Password"
        value=""
        placeholder="passwordField"
        onChange={handleChange}
      />
      <Button name="signIn" clasName="signIn" text="Sign In" type="Primary" />
      <p className="forgotPassword">Forgot your password?</p>
    </div>
  );
}

export default SignIn;
