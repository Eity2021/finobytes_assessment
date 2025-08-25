import { apiSlice } from "../api/apiSlice";

export const notificationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getNotification: builder.query({
            query: (role) => `/${role}/notification`,
        }),

    })
});
export const { useGetNotificationQuery } = notificationApi;

