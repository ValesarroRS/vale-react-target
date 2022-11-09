import Button from "components/shared/Button";
import React from "react";
import { useDeleteLogOutMutation } from "services/targetApi";
import { revokeCredentials } from "store/auth.reducer";
import { useDispatch } from "react-redux";
import HomeWelcome from "components/HomeWelcome";
import SplitBar from "components/shared/SplitBar";

const Welcome = () => {
  const dispatch = useDispatch();

  const [logOutRequest] = useDeleteLogOutMutation();

  async function logOut() {
    try {
      await logOutRequest();
    } catch (error) {
      return;
    }
    dispatch(revokeCredentials());
  }
  return (
    <>
      <HomeWelcome />
      <SplitBar />
      <Button text="Log out" variant="small" onClick={logOut} />
    </>
  );
};

export default Welcome;
