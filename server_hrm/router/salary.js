import  express  from "express";
import { addSalary, deleteSalary, getSalary,updateSalary } from "../controllers/salaryController.js";
const routeSalary = express.Router()
routeSalary.post("/addSalary/",addSalary);
routeSalary.get("/listSalary/",getSalary);
routeSalary.delete("/deleteSalary/:id",deleteSalary);
routeSalary.put("/updateSalary/:id",updateSalary);

export default routeSalary 