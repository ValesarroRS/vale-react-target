import Button from "components/shared/Button";
import React from "react";
import { useDeleteLogOutMutation } from "services/targetApi";
import { revokeCredentials } from "store/auth.reducer";
import { useDispatch } from "react-redux";

const Welcome = () => {
  const dispatch = useDispatch();

  const [
    logOutRequest,
    /* 
    {
      isLoading: logOutLoading,
      isError: logOutIsError,
      isSuccess: logOutSuccess,
      error: logOutError, 
    },
    */
  ] = useDeleteLogOutMutation();

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
      <Button text="Log out" onClick={() => logOut()} />
    </>
  );
};

export default Welcome;
