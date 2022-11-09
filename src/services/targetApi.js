import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const prepareHeaders = (headers, { getState }) => {
  const { client, access, uid } = getState().auth;
  if (uid) {
    headers.set("access-token", access);
    headers.set("client", client);
    headers.set("uid", uid);
  }
  return headers;
};

export const targetApi = createApi({
  reducerPath: "targetApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    fetchValidGenders: builder.query({
      query: () => ({ url: "/valid_genders", method: "GET" }),
      transformResponse: (res) => res.genders.map((gender) => gender.option),
    }),
    postSignUp: builder.mutation({
      query: (body) => ({ url: "/users", method: "POST", body }),
    }),
    postSignIn: builder.mutation({
      query: (body) => ({
        url: "/users/sign_in",
        method: "POST",
        body,
      }),
      transformResponse: (res, meta) => {
        const { headers } = meta.response;
        return {
          access: headers.get("Access-Token"),
          client: headers.get("Client"),
          uid: headers.get("Uid"),
          name: res.user.first_name,
        };
      },
    }),
    deleteLogOut: builder.mutation({
      query: (body) => ({ url: "/users/sign_out", method: "DELETE", body }),
    }),
  }),
});

export const {
  useFetchValidGendersQuery,
  usePostSignUpMutation,
  usePostSignInMutation,
  useDeleteLogOutMutation,
} = targetApi;
