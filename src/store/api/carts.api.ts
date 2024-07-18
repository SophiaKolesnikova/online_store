import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CartsServerResponse, CartType, ProductType } from 'app/types';

export const cartsApi = createApi({
    reducerPath: 'carts/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/',
    }),
    endpoints: (build) => ({
        getCarts: build.query<CartType[], number>({
            query: (userId: number) => ({
                url: `carts/user/${userId}`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer /${localStorage.getItem('authToken')}/`,
                    'Content-Type': 'application/json',
                },
            }),
            transformResponse: (response: CartsServerResponse<CartType>) =>
                response.carts,
        }),
        updateCart: build.mutation<
            CartType,
            Partial<ProductType> & { cartId: number }
        >({
            query: ({ cartId, ...product }) => ({
                url: `carts/${cartId}`,
                method: 'PUT',
                headers: {
                    Authorization: `Bearer /${localStorage.getItem('authToken')}/`,
                    'Content-Type': 'application/json',
                },
                body: {
                    merge: true,
                    products: [
                        {
                            id: product.id,
                            quantity: product.quantity,
                        },
                    ],
                },
            }),
        }),
    }),
});

export const { useGetCartsQuery, useUpdateCartMutation } = cartsApi;
