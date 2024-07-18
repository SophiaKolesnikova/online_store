import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductsServerResponse, ProductType } from 'app/types';

export const productsApi = createApi({
    reducerPath: 'products/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/',
    }),
    endpoints: (build) => ({
        getProducts: build.query<ProductType[], unknown>({
            query: ({ limit, skip }) => ({
                url: `products`,
                params: {
                    limit: limit,
                    skip: skip,
                },
            }),
            transformResponse: (
                response: ProductsServerResponse<ProductType>
            ) => response.products,
        }),
        searchProducts: build.query<ProductType[], string>({
            query: (search: string) => ({
                url: `products/search`,
                params: {
                    q: search,
                },
            }),
            transformResponse: (
                response: ProductsServerResponse<ProductType>
            ) => response.products,
        }),
        getOneProduct: build.query<ProductType, number>({
            query: (productId: number) => ({
                url: `products/${productId}`,
            }),
        }),
    }),
});

export const {
    useGetProductsQuery,
    useSearchProductsQuery,
    useGetOneProductQuery,
} = productsApi;
