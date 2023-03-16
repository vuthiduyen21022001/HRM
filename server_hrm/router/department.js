import express  from "express";
import { addDepartments, getDepartments ,deleteDepartments, updateDepartments} from "../controllers/departmentController.js";

const routeDepartments = express.Router()
routeDepartments.post("/addDepartments",addDepartments);
routeDepartments.get("/listDepartments",getDepartments);
routeDepartments.delete("/deleteDepartments/:id",deleteDepartments);
routeDepartments.put("/updateDepartments/:id",updateDepartments);

export default routeDepartments;