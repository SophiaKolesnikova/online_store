import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthType } from 'app/types';

export const authApi = createApi({
    reducerPath: 'auth/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/',
    }),
    endpoints: (build) => ({
        addAuthUser: build.mutation<AuthType, Partial<AuthType>>({
            query: (body) => ({
                url: `auth/login`,
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useAddAuthUserMutation } = authApi;
