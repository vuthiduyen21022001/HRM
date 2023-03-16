import { https } from "./configURL"
export const userService = {
    getUserList: () => {
        return https.get("/api/employee/listEmployee");
    },
    postRegister: (value) => {
        return https.post("/api/employee/addEmployee", value)
    },
    deleteUser: (id) => {
        return https.delete(`/api/employee/deleteOne/${id}`);
    },
 
    updateUser: (id, value) => {
        return https.put(`/api/employee/updateOne/${id}`, value);

    },
    postManager: (value) => {
        return https.post("/api/employee/addEmployee", value)
    },
    loginUser: (value) => {
        return https.post("/api/employee/loginEmployee",value);
    },

   
};









