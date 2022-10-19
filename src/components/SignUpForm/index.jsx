import React from "react";
import { useState } from "react";
import InputLabel from "../shared/InputLabel/index.jsx";
import DropDown from "../shared/DropDown/index.jsx";
import Button from "../shared/Button/index.jsx";
import { useNavigate } from "react-router-dom";

const GENDERS = ["select your gender", "female", "male", "other"];

const SignUpForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  async function createUser(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const url = `https://target-api-induction-v2.herokuapp.com/api/v1/users`;
    const body = {
      user: {
        first_name: user.name,
        email: user.email,
        gender: user.gender,
        password: user.password,
        password_confirmation: user.confPassword,
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

  return (
    <>
      <div className="signUpForm">
        <form onSubmit={createUser}>
          <h1 className="title">Sign Up</h1>
          {loading ? <p>Loading</p> : null}
          <InputLabel
            className="inputName"
            name="name"
            id="name"
            labelText="Name"
            value={user.name}
            onChange={handleChange}
          />
          <InputLabel
            className="inputName"
            name="email"
            id="email"
            labelText="Email"
            value={user.email}
            onChange={handleChange}
          />
          <InputLabel
            className="inputName"
            name="password"
            id="password"
            labelText="Password"
            type="password"
            value={user.password}
            placeholder="Min. 6 characters long"
            onChange={handleChange}
          />
          <InputLabel
            className="inputName"
            name="confPassword"
            id="confPassword"
            labelText="Confirm Password"
            type="password"
            value={user.confPassword}
            onChange={handleChange}
          />
          <DropDown
            className="inputName"
            id="gender"
            name="gender"
            labelText="Gender"
            value={user.gender}
            placeholder="gender"
            onChange={handleChange}
            OPTIONS={GENDERS}
          />
          <Button
            name="signUp"
            className="largeButton"
            text="Sign Up"
            type="submit"
          />
          {error ? <p>Error</p> : null}
          <div className="splitBar" />
        </form>
        <Button
          name="signIn"
          className="smallButton"
          text="Sign In"
          onClick={() => navigate("/")}
        />
      </div>
    </>
  );
};

export default SignUpForm;
