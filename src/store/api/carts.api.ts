import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CartsServerResponse, CartType } from 'app/types';

export const cartsApi = createApi({
    reducerPath: 'carts/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/',
    }),
    endpoints: (build) => ({
        getCarts: build.query<CartType[], number>({
            query: (userId: number) => ({
                url: `carts/user/${userId}`,
            }),
            transformResponse: (response: CartsServerResponse<CartType>) =>
                response.carts,
        }),
    }),
});

export const { useGetCartsQuery } = cartsApi;
