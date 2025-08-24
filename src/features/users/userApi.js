import { apiSlice } from "../api/apiSlice";


export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // createBmi: builder.mutation({
    //   query: ({data,role}) => ({
    //     url: `/public/api/${role}/bmistore`,
    //     method: "POST",
    //     body:data
    //   }),
    // }),

    getUser: builder.query({
      query: (role) => `/${role}/users`,
    }),
  }),
});

export const { useGetUserQuery } = userApi;
