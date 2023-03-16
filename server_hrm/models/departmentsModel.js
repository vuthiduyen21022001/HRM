import mongoose from "mongoose";
const departmentsSchema = new mongoose.Schema({
    name:{
        type:'string',
        minLenght:6,
        maxLenght:250,
        require:true,
       
    },
    description:{
        type:'string',
       
    },
},{timestamps:true});
export const departmentsModel  = mongoose.model('Departments',departmentsSchema);