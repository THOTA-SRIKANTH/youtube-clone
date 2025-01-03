import { configureStore } from "@reduxjs/toolkit";
import appSlice from './appSlice';

const store = configureStore({
  reducer: {
    app: appSlice, // Your app's slice reducer
  },
  // Optional: Add custom middleware if needed
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production', // Enables DevTools only in development  
});

export default store;
