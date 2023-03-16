import mongoose from "mongoose";
const positionsSchema = new mongoose.Schema({
    name:{
        type:'string',
        require:true,
       
    },
    description:{
        type:'string',
       
    },
    salary:{
        type:'number',
        require:true,
    },
},{timestamps:true});
export const positionsModel = mongoose.model('Position',positionsSchema);