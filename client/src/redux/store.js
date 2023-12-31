import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";


export const store = configureStore({
    reducer: {user: userReducer},
    middleware: (getDefaultMiddelware) => getDefaultMiddelware({
        serializableCheck: false,
    }),
});