import { departmentsModel } from "../models/departmentsModel.js";

export const addDepartments = async (req, res) => {
    try {
        const newDepartments = await new departmentsModel({
            name: req.body.name,
            description: req.body.description,
         
        });
        const departments = await newDepartments.save();
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json(error);
    }
};
export const getDepartments = async (req, res) => {
    try {
      // find: lay all
      const departments = await departmentsModel.find();
      console.log("Departments", departments);
      res.status(200).json(departments);
  
    } catch (error) {
      res.status(500).json(error);
    }
  };
  export const deleteDepartments = async (req, res) => {
    try {
      // // Xóa một bản ghi
      await departmentsModel.findByIdAndRemove(req.params.id)
      res.json({ status: "delete thành công" })
    } catch (error) {
      res.status(500).json(error);
    }
  }
  export const updateDepartments= async (req, res)=>{
    // Sửa một bản ghi
    try{
      const updateDepartments = {
        name: req.body.name,
        description: req.body.description,
        }
        
      await departmentsModel.findByIdAndUpdate(req.params.id,{$set:updateDepartments},{new:true})
      res.json({status:"sửa thành công"})
    }catch(error){
      res.status(500).json(error);
    }
  }