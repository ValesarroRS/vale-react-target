import React from "react";
import { useState } from "react";
import InputLabel from "../shared/InputLabel/index.jsx";
import DropDown from "../shared/DropDown/index.jsx";
import Button from "../shared/Button/index.jsx";
import { useNavigate } from "react-router-dom";
import ConfirmationSent from "../ConfirmationSent/index.jsx";
import {
  useFetchValidGendersQuery,
  usePostSignUpMutation,
} from "../../services/targetApi.js";

const SignUpForm = () => {
  const navigate = useNavigate();

  const { data: genderData, isLoading: genderLoading } =
    useFetchValidGendersQuery();

  const [
    signUpRequest,
    {
      isLoading: signUpLoading,
      isError: signUpIsError,
      isSuccess: signUpSuccess,
      error: signUpError,
    },
  ] = usePostSignUpMutation();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
    gender: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  async function createUser(event) {
    event.preventDefault();
    const body = {
      user: {
        first_name: user.name,
        email: user.email,
        gender: user.gender,
        password: user.password,
        password_confirmation: user.confPassword,
      },
    };
    signUpRequest(body);
  }

  if (signUpSuccess) {
    return <ConfirmationSent />;
  }
  return (
    <>
      <div className="signUpForm">
        <form onSubmit={createUser}>
          <h1 className="title">Sign Up</h1>
          {signUpLoading ? <p>Loading</p> : null}
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
            placeholder="select your gender"
            onChange={handleChange}
            options={genderData}
            isLoading={genderLoading}
          />
          <Button
            name="signUp"
            className="largeButton"
            text="Sign Up"
            type="submit"
          />
          {signUpIsError ? (
            <p className="error">{signUpError.data.errors.full_messages[0]}</p>
          ) : null}
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
