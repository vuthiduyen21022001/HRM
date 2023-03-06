import mongoose from "mongoose";
const employeeSchema = new mongoose.Schema({
    name:{
        type:'string',
        minLenght:6,
        maxLenght:250,
        require:true,
       
    },
    age:{
      type:'number',
      minLenght:0,
    require:true,

    },
    position:{
        type:'string',
     
    },
    username:{
        type:'string',
        require:true,
        minLenght:6,
        maxLenght:30,
    },
    password:{
        type:'string',
      require:true,
        maxLenght:6,
    },
    department:{
        type:"string",
      
    },
   


},{timestamps:true});
export const employeeModel = mongoose.model('Employee',employeeSchema);