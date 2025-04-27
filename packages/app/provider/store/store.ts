import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

// import {AuthAdminQuerySlice} from "./reducers/dashboard/auth";
// import appLoaderReducer from './reducers/generic/AppLoaderSlice'
// import toggleSidePanelReducer from './reducers/panels/toggleSidePanelSlice'
import accessTokenReducer from './reducers/AccessTokenSlice'
// import refreshTokenReducer from './reducers/dashboard/auth/token/refreshTokenSlice'
//
// import { WhatWaterByKoosmikApi } from './WhatWaterByKoosmikApi'
import { BudhiApi } from './BudhiApi'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['accessToken', 'refreshToken'],
  blacklist: [] as any[],
}

const rootReducer = combineReducers({
  //   appLoader: appLoaderReducer,
  //   toggleSidePanel: toggleSidePanelReducer,
  // themeSlice: themeSliceReducer,
  accessToken: accessTokenReducer,
  //   refreshToken: refreshTokenReducer,

  //  Dashboard
  // [AuthAdminQuerySlice.reducerPath]: AuthAdminQuerySlice.reducer,
  //   [WhatWaterByKoosmikApi.reducerPath]: WhatWaterByKoosmikApi.reducer,
  [BudhiApi.reducerPath]: BudhiApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,

  //@ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
      thunk: {
        extraArgument: {},
      },
    }).concat(BudhiApi.middleware),
  devTools: true,
})

export const persistedStore =
  typeof window !== 'undefined' ? persistStore(store) : store
// Infer the `RootState` and `AppDispatch` types from the store_old itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

//export default store_old
export default store
