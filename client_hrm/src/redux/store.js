import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./userSlice";
import salariSlice from './salariSlice';
const store = configureStore({
  reducer: {
    userSlice,
    salariSlice,
  },
  devTools:true,
});

export default store;
