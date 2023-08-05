import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = "https://world.openfoodfacts.net/api/v2/"
const productsHeaders ={
    "content-type": "application/json; charset=utf-8"
}
const createRequest = (url) => ({url,headers:productsHeaders})

export const  productsApi = createApi({
    reducerPath:'productApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => createRequest(`search`)
        })
    })
})

export const {
    useGetProductsQuery
} = productsApi;