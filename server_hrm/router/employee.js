import express from "express";
import { addEmployee, deleteOne, getEmployee, loginUser, updateOne } from "../controllers/employeeController.js";
import middlewareController from "../controllers/middlewareController.js";


const route = express.Router();
route.post("/addEmployee",addEmployee);
route.get("/listEmployee",middlewareController.verifyToken,getEmployee);
route.delete("/deleteOne/:id",middlewareController.verifyTokenAndAdminAuth,deleteOne);
route.put("/updateOne/:id",updateOne)
route.put("/updateOne/:id",updateOne);
route.post("/loginEmployee",loginUser);

export default route;
