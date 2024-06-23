import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductsServerResponse, ProductType } from 'app/types';

export const productsApi = createApi({
    reducerPath: 'products/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/',
    }),
    endpoints: (build) => ({
        getProducts: build.query<
            ProductType[],
            Partial<ProductsServerResponse<ProductType> & { search: string }>
        >({
            query: ({ limit, skip, search }) => ({
                url: `products/search`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer /${localStorage.getItem('authToken')}/`,
                    'Content-Type': 'application/json',
                },
                params: {
                    q: search,
                    limit: limit,
                    skip: skip,
                },
            }),
            transformResponse: (
                response: ProductsServerResponse<ProductType>
            ) => response.products,
        }),
        getOneProduct: build.query<ProductType, number>({
            query: (productId: number) => ({
                url: `products/${productId}`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer /${localStorage.getItem('authToken')}/`,
                    'Content-Type': 'application/json',
                },
            }),
        }),
    }),
});

export const { useGetProductsQuery, useGetOneProductQuery } = productsApi;
