import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   departmentList: [],
   createdepartment:{
       name:"",
       description:"",
       
   }
}

export const departmentsSlice = createSlice({
    name: "departmentsSlice",
    initialState,
    reducers: {
        getListDepartments: (state, { payload }) => {
            state.departmentList = payload;
        },
        addDepartment: (state, action) => {
            state.createdepartment.name = action.payload.name
            state.createdepartment.description = action.payload.description
           
        }
    },
});

export const { getListDepartments,addDepartment } = departmentsSlice.actions;
export default departmentsSlice.reducer;