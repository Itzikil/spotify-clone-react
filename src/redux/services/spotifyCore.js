import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const spotifyCoreApi = createApi({
    reducerPath: 'spotifyCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://spotify81.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '425ef3c367mshd0534f93a0139e1p121e21jsn9450151d74e1')
            return headers
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
        getTopChartsByCountry: builder.query({ query: (country) => `/charts/world/${country}` }),
        getTopArtists: builder.query({ query: () => '/top_20_by_monthly_listeners' }),
        getBySearch: builder.query({ query: (name) => `/search/?q=${name}&type=tracks&limit=100` }),
    })
})

export const {
    useGetTopChartsQuery,
    useGetTopChartsByCountryQuery,
    useGetTopArtistsQuery,
    useGetBySearchQuery,
} = spotifyCoreApi