import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    salarilist: []
}

export const salariSlice = createSlice({
    name: "salariSlice",
    initialState,
    reducers: {
        getListSalary: (state, { payload }) => {
            state.salarilist = payload;
        },
    },
});

export const { getListSalary } = salariSlice.actions;
export default salariSlice.reducer;