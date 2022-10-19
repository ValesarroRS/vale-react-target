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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function login(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const url = `https://target-api-induction-v2.herokuapp.com/api/v1/users/sign_in`;
    const body = {
      user: {
        email: user.email,
        password: user.password,
      },
    };
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch(() => {
        setError(true);
        console.log("hay Error");
      })
      .finally(() => setLoading(false));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <Header />
      <div className="signIn">
        <form onSubmit={login}>
          {loading ? <p>Loading</p> : null}
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
          {error ? <p>Error</p> : null}
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
