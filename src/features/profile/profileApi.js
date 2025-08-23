import { apiSlice } from "../api/apiSlice";

export const profileApi = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        getProfile:builder.query({
            query:(role) => `/auth/me`,
        }),

    })
});
export const {useGetProfileQuery} = profileApi;

