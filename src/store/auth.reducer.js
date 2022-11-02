/* eslint-disable no-param-reassign */
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  access: null,
  client: null,
  uid: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload: { client, access, uid } }) => {
      state.client = client;
      state.access = access;
      state.uid = uid;
    },
    revokeCredentials: (state) => {
      state.client = null;
      state.access = null;
      state.uid = null;
    },
  },
});

const selectCurrentUser = (state) => state.auth.uid;

export const useAuth = () => {
  const user = useSelector(selectCurrentUser);
  return useMemo(() => ({ user }), [user]);
};

export const { setCredentials, revokeCredentials } = slice.actions;

export default slice.reducer;
