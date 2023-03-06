import mongoose from "mongoose";
const salarySchema = new mongoose.Schema({
    salary:{
        type:'number',
        minLenght:6,
        maxLenght:30,
        require:true,
    },
    bonus: {
        type:'string',
       
    },
    allowance: {
        type:'number',

    },
    tax:{
        type:'number',
    },
    total_salary: {
        type:'number',
    },
},{timestamps:true});
export const salaryModel = mongoose.model('Salary',salarySchema);