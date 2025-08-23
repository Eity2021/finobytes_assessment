import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              token: result.data.token,
              role: result?.data?.user?.role,
            })
          );
      console.log("result", result?.data?.user?.role)
          dispatch(
            userLoggedIn({
              token: result.data.token,
              role: result?.data?.user?.role,
            })
          );
        } catch (err) { }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;