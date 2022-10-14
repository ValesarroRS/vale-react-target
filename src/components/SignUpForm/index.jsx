import React from "react";
import { useState, useEffect } from "react";
import InputLabel from "../shared/InputLabel/index.jsx";
import DropDown from "../shared/DropDown/index.jsx";
import Button from "../shared/Button/index.jsx";
import { useNavigate } from "react-router-dom";

const GENDERS = [
  "Select your gender",
  "Female",
  "Male",
  "Non-binary",
  "I rather not say",
];

const SignUpForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    createUser();
  }, []);

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

  async function createUser() {
    const res = await fetch(
      `https://target-api-induction-v2.herokuapp.com/api/v1/users`
    );
    const json = await res.json();
    console.log(json);
  }

  return (
    <>
      <div className="signUpForm">
        <form>
          <h1 className="title">Sign Up</h1>
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
            option={user.gender}
            id="gender"
            name="gender"
            labelText="Gender"
            value={user.gender}
            placeholder="gender"
            onChange={handleChange}
            OPTIONS={GENDERS}
          />
          <Button name="signUp" className="largeButton" text="Sign Up" />
          <div className="splitBar" />
          <Button
            name="signIn"
            className="smallButton"
            text="Sign In"
            onClick={navigate("/")}
          />
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
