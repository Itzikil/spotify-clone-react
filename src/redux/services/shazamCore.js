import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://spotify23.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '425ef3c367mshd0534f93a0139e1p121e21jsn9450151d74e1')
            return headers
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
        getSongDetails: builder.query({ query: (songid) => `/tracks/?ids=${songid}` }),
        getSongLyrics: builder.query({ query: ({songid}) => `/track_lyrics/?id=${songid}` }),
        getArtist: builder.query({ query: ({artistid}) => `/artists/?ids=${artistid}` }),
        getRelatedArtists: builder.query({ query: ({artistid}) => `/artist_related/?id=${artistid}` }),
    })
})

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongLyricsQuery,
    useGetArtistQuery,
    useGetRelatedArtistsQuery,
} = shazamCoreApi