import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl="https://fakestoreapi.com"
const productsApiHeaders = {
    "content-type": "application/json; charset=utf-8"
}
const createRequest = (url) =>({ url, headers:productsApiHeaders})

export const fakeStoreApi = createApi({
    reducerPath:'fakeStoreApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getAllFakeProducts: builder.query({
            query: () => createRequest(`/products`)
        }),
        getLimitFakeProducts: builder.query({
            query: ({count}) => createRequest(`/products?limit=${count}`)
        }),
        getSingleFakeProduct: builder.query({
            query: ({id}) => createRequest(`/products/${id}`)
        })
    })
})

export const {
    useGetLimitFakeProductsQuery,
    useGetAllFakeProductsQuery,
    useGetSingleFakeProductQuery
} = fakeStoreApi;