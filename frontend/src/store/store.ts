// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './jobSlice'; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;