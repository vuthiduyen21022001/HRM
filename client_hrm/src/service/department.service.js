import { https } from "./configURL"

export const departmentService = {
    updateDepartment: (id,s) => {
        return https.put(`/api/departments/updateDepartments/${id}`,s);

    },
    getDepartmentsList: (value) => {
        return https.get("/api/departments/listDepartments",value);
    },
   
    deleteDepartments: (id) => {
        return https.delete(`/api/departments/deleteDepartments/${id}`);

    },
    createdepartment: (value) => {
        return https.post("/api/departments/addDepartments",value);

    },

}