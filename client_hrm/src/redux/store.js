import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./userSlice";
import salariSlice from './salariSlice';
import positionsSlice from './positionsSlice';
import departmentsSlice from './departmentsSlice';
const store = configureStore({
  reducer: {
    userSlice,
    salariSlice,
    positionsSlice,
    departmentsSlice,
  },
  devTools:true,
});

export default store;
