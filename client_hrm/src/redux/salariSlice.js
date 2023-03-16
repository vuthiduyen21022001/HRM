import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    salarilist: [],
    createSalary: {
        salary: "",
        bonus: "",
        allowance: "",
        tax: "",
        total_salary: "",
    }
}

export const salariSlice = createSlice({
    name: "salariSlice",
    initialState,
    reducers: {
        getListSalary: (state, { payload }) => {
            state.salarilist = payload;
        },
        addSalary: (state, action) => {
            state.createSalary.salary = action.payload.salary
            state.createSalary.bonus = action.payload.bonus
            state.createSalary.allowance = action.payload.allowance
            state.createSalary.tax = action.payload.tax
            state.createSalary.total_salary = action.payload.total_salary
        }
    },
});

export const { getListSalary,addSalary } = salariSlice.actions;
export default salariSlice.reducer;