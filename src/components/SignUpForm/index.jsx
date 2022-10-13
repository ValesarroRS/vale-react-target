import React from "react";
import { useState, useEffect } from "react";
import InputLabel from "../shared/InputLabel/index.jsx";
import DropDown from "../shared/DropDown/index.jsx";
import Button from "../shared/Button/index.jsx";
import { useNavigate } from "react-router-dom";

const GENDERS = ["Female", "Male", "Non-binary", "I rather not say"];

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
    <div className="signUpForm">
      <form>
        <h1 className="title">Sign Up</h1>
        <InputLabel
          name="name"
          id="name"
          labelText="Name"
          value={user.name}
          placeholder="name"
          onChange={handleChange}
        />
        <InputLabel
          name="email"
          id="email"
          labelText="Email"
          value={user.email}
          placeholder="email"
          onChange={handleChange}
        />
        <InputLabel
          name="password"
          id="password"
          labelText="Password"
          type="password"
          value={user.password}
          placeholder="password"
          onChange={handleChange}
        />
        <InputLabel
          name="confPassword"
          id="confPassword"
          labelText="Confirm Password"
          type="password"
          value={user.confPassword}
          placeholder="confPassword"
          onChange={handleChange}
        />
        <DropDown
          option={user.gender}
          id="gender"
          name="gender"
          labelText="Gender"
          value={user.gender}
          placeholder="gender"
          onChange={handleChange}
          OPTIONS={GENDERS}
        />
        <Button name="signUp" clasName="signUp" text="Sign Up" type="Primary" />
        <div clasName="splitBar"></div>
        <Button
          name="signIn"
          clasName="signIn"
          text="Sign In"
          type="Secondary"
          onClick={navigate("/")}
        />
      </form>
    </div>
  );
};

export default SignUpForm;
