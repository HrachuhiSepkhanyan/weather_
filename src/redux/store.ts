import { configureStore,combineReducers } from "@reduxjs/toolkit";
  export const rootReducer =combineReducers(
    reducers:{

 })

 export const store=configureStore(options:{
    reducer : rootReducer,
 })


 export type RootState=ReturnType<typeof rootReducer>
 export type AppStore=typeof store
 export type AppDispatch=AppStore["dispatch"]