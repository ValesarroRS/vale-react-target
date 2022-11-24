import { React, useState } from "react";
import InputLabel from "components/shared/InputLabel";
import DropDown from "components/shared/DropDown";
import Button from "components/shared/Button";
import ConfirmationSent from "components/ConfirmationSent";
import { useNavigate } from "react-router-dom";
import {
  useFetchValidGendersQuery,
  usePostSignUpMutation,
} from "services/targetApi";
import styles from "./index.module.scss";
import Title from "components/shared/Title";
import SplitBar from "components/shared/SplitBar";
import Error from "components/shared/Error";

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
    <div className={styles.signUpContainer}>
      <form onSubmit={createUser}>
        <Title text="Sign Up" />
        {signUpLoading && <p>Loading</p>}
        <InputLabel
          name="name"
          id="name"
          labelText="Name"
          value={user.name}
          onChange={handleChange}
        />
        <InputLabel
          name="email"
          id="email"
          labelText="Email"
          value={user.email}
          onChange={handleChange}
        />
        <InputLabel
          name="password"
          id="password"
          labelText="Password"
          type="password"
          value={user.password}
          placeholder="Min. 6 characters long"
          onChange={handleChange}
        />
        <InputLabel
          name="confPassword"
          id="confPassword"
          labelText="Confirm Password"
          type="password"
          value={user.confPassword}
          onChange={handleChange}
        />
        <DropDown
          id="gender"
          name="gender"
          labelText="Gender"
          value={user.gender}
          placeholder="select your gender"
          onChange={handleChange}
          options={genderData}
          isLoading={genderLoading}
        />
        <Button name="signUp" text="Sign Up" type="submit" />
        {signUpIsError && (
          <Error>{signUpError.data.errors.full_messages[0]}</Error>
        )}
        <SplitBar />
      </form>
      <Button
        name="signIn"
        variant="small"
        text="Sign In"
        onClick={() => navigate("/signIn")}
      />
    </div>
  );
};

export default SignUpForm;
