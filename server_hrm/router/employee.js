import express from "express";
import { addEmployee, deleteOne, getEmployee, updateOne } from "../controllers/employeeController.js";
// import { addSalary, getSalary } from "../controllers/salaryController.js";
const route = express.Router();
route.post("/addEmployee",addEmployee);
route.get("/listEmployee",getEmployee);
route.delete("/deleteOne/:id",deleteOne);
route.put("/updateOne/:id",updateOne)
// route.post("/addSalary",addSalary);
// route.get("/listSalary",getSalary);
// route.delete("/deleteOne/:id",deleteOne);
route.put("/updateOne/:id",updateOne);
export default route;
