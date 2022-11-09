/* eslint-disable no-param-reassign */
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  access: null,
  client: null,
  uid: null,
  name: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload: { client, access, uid, name } }) => {
      state.client = client;
      state.access = access;
      state.uid = uid;
      state.name = name;
    },
    revokeCredentials: (state) => {
      state.client = null;
      state.access = null;
      state.uid = null;
      state.name = null;
    },
  },
});

const selectCurrentUser = (state) => ({
  uid: state.auth.uid,
  name: state.auth.name,
});

export const useAuth = () => {
  const user = useSelector(selectCurrentUser);
  return useMemo(() => user, [user]);
};

export const { setCredentials, revokeCredentials } = slice.actions;

export default slice.reducer;
