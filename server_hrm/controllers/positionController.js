import { positionsModel } from "../models/positionsModel.js";

export const addPosition = async (req, res) => {
    try {
        const newPosition = await new positionsModel({
            name: req.body.name,
            description: req.body.description,
            salary: req.body.salary,
        });
        const position = await newPosition.save();
        res.status(200).json(position);
    } catch (error) {
        res.status(500).json(error);
    }
};
export const getPosition = async (req, res) => {
    try {
      // find: lay all
      const position = await positionsModel.find();
      console.log("Position", position);
      res.status(200).json(position);
  
    } catch (error) {
      res.status(500).json(error);
    }
  };
  export const deletePosition = async (req, res) => {
    try {
      // // Xóa một bản ghi
      await positionsModel.findByIdAndRemove(req.params.id)
      res.json({ status: "delete thành công" })
    } catch (error) {
      res.status(500).json(error);
    }
  }
  export const updatePosition = async (req, res)=>{
    // Sửa một bản ghi
    try{
      const updatePosition = {
        name: req.body.name,
        description: req.body.description,
        salary: req.body.salary,}
        
      await positionsModel.findByIdAndUpdate(req.params.id,{$set:updatePosition},{new:true})
      res.json({status:"sửa thành công"})
    }catch(error){
      res.status(500).json(error);
    }
  }