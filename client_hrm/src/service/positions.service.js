import { applyMiddleware } from "@reduxjs/toolkit";
import { https } from "./configURL"

export const positionsService = {
   
    createposition: (value) => {
        return https.post("/api/positions/addPosition",value);

    },
    getPositionsList: (value) => {
        return https.get("/api/positions/listPosition",value);
    },
    updatePositions: (id, pos) => {
        return https.put(`/api/positions/updatePosition/${id}`, pos);

    },
    deletePositions: (id) => {
        return https.delete(`/api/positions/deletePosition/${id}`);

    },

}