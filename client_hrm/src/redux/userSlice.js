import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  userList: [],
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    getListUser: (state, {payload}) => {
      state.userList = payload;
    },
  },
});

export const {getListUser} = userSlice.actions;

export default userSlice.reducer;
