import { salaryModel } from "../models/salaryModel.js";
export const addSalary = async (req, res)=> {
    try {
        const newSalary = await new salaryModel({
            salary:req.body.salary,
            bonus:req.body.bonus,
            allowance:req.body.allowance,
            tax:req.body.tax,
            total_salary:req.body.total_salary,
        });
        const salary = await newSalary.save();
        res.status(200).json(salary);
    } catch (error) {
      res.status(500).json(error);
    }
};
export const getSalary = async (req, res)=>{
    try {
        const salary = await salaryModel.find();
        console.log("salary",salary);
        res.status(200).json(salary);
    } catch (error) {
        res.status(500).json(error);
    }

};
export const deleteSalary = async (req, res)=>{
    try {
      // // Xóa một bản ghi
   await salaryModel.findByIdAndRemove(req.params.id)
   res.json({status:"delete thành công"})
    } catch (error) {
      res.status(500).json(error);
    }
  }
  export const updateSalary = async (req, res)=>{
    // Sửa một bản ghi
    try{
      const updateSalary = {
        salary:req.body.salary,
        bonus:req.body.bonus,
        allowance:req.body.allowance,
        tax:req.body.tax,
        total_salary:req.body.total_salary,}
        
      await salaryModel.findByIdAndUpdate(req.params.id,{$set:updateSalary},{new:true})
      res.json({status:"sửa thành công"})
    }catch(error){
      res.status(500).json(error);
    }
  }