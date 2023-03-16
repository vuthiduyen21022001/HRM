import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    positionList: [],
    createposition:{
        name:"",
        description:"",
        salary:"",
    }
}

export const positionsSlice = createSlice({
    name: "positionsSlice",
    initialState,
    reducers: {
        getListPositions: (state, { payload }) => {
            state.positionList = payload;
        },
        addSalary: (state, action) => {
            state.createposition.name = action.payload.name
            state.createposition.description = action.payload.description
            state.createposition.salary = action.payload.salary
            
           
        }
    },
});

export const { getListPositions,addPosition } = positionsSlice.actions;
export default positionsSlice.reducer;