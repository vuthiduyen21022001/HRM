import { employeeModel } from "../models/employeeModel.js";
import bcrypt from "bcrypt";
import { UserModel } from "../models/userModel.js";
import jwt from "jsonwebtoken";
export const addEmployee = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    const newEmployee = await new employeeModel({
      name: req.body.name,
      age: req.body.age,
      position: req.body.position,
      username: req.body.username,
      password: hashed,
      department: req.body.department,
    });
    const employee = await newEmployee.save();
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getEmployee = async (req, res) => {
  try {
    // find: lay all
    const employee = await employeeModel.find();
    console.log("employee", employee);
    res.status(200).json(employee);

  } catch (error) {
    res.status(500).json(error);
  }
};
export const deleteOne = async (req, res) => {
  try {
    // // Xóa một bản ghi
    await employeeModel.findByIdAndDelete(req.params.id)
    res.json({ status: "delete thành công" })
  } catch (error) {
    res.status(500).json(error);
  }
}
export const updateOne = async (req, res) => {
  // Sửa một bản ghi
  try {
    const updateEmployee = {
      name: req.body.name,
      age: req.body.age,
      position: req.body.position,
      username: req.body.username,
      password: req.body.password,
      department: req.body.department,
    }

    await employeeModel.findByIdAndUpdate(req.params.id, { $set: updateEmployee }, { new: true })
    res.json({ status: "sửa thành công" })
  } catch (error) {
    res.status(500).json(error);
  }
}
export const loginUser = async (req, res) => {
  try {
    const employee = await employeeModel.findOne({ username: req.body.username });
    if (!employee) {
      res.status(404).json("Incorrect username");
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      employee.password
    );
    if (!validPassword) {
      res.status(404).json("Incorrect password");
    }

    if (employee && validPassword) {
    //  res.status(200).json(employee);
     const accessToken =  jwt.sign(
        {
          id:employee.id,
          position:employee.position,
        },
      
       
      "secret",
      {
        expiresIn:"2day"
      });
      const{password,...others}=employee._doc;
       res.status(200).json({...others,accessToken});
    }
    }catch (error) {
      res.status(500).json(error);

  } 
  };
  // export const deleteEmployee = async (req, res) => {
  //   try {
  //     // // Xóa một bản ghi
  //     await employeeModel.findByIdAndRemove(req.params.id)
  //     res.json({ status: "delete employee thành công" })
  //   } catch (error) {
  //     res.status(500).json(error);
  //   }
  // }
// Sửa một bản ghi
// User.updateOne({ _id: '6067d6ddc9941f8b89009c1a' }, { name: 'John Doe' }, function (err) {
//   if (err) console.log(err);
//   console.log("Sửa thành công");
// });
