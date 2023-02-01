import { configureStore } from '@reduxjs/toolkit'

import playerReducer from './features/playerSlice'
import { shazamCoreApi } from './services/shazamCore'
import { spotifyCoreApi } from './services/spotifyCore'

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    [spotifyCoreApi.reducerPath]: spotifyCoreApi.reducer,
    player: playerReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(spotifyCoreApi.middleware),
})
