import express  from "express";
import { addPosition, getPosition ,deletePosition, updatePosition} from "../controllers/positionController.js";

const routePosition = express.Router()
routePosition.post("/addPosition",addPosition);
routePosition.get("/listPosition",getPosition);
routePosition.delete("/deletePosition/:id",deletePosition);
routePosition.put("/updatePosition/:id",updatePosition);

export default routePosition;