import {https} from "./configURL"
export const userService = {
    getUserList: () => {
        return https.get("/api/employee/listEmployee");
      },
    postRegister : (value)=> {
        return https.post("/api/employee/addEmployee",value)
    },
    deleteUser: (id) =>{
        return https.delete(`/api/employee/deleteOne/${id}`);
    },
    updateUser: (id,value) =>{
        return https.put(`/api/employee/updateOne/${id}`,value);

    },
    getSalaryList: () => {
        return https.get("/api/salary/listSalary");
      },
    // postSalari : (value)=> {
    //     return https.post("/api/salary/addSalary",value)
    // },
    // deleteSalari: (id) =>{
    //     return https.delete(`/api/salary/deleteOne/${id}`);
    // },
    // updateSalari: (id,value) =>{
    //     return https.put(`/api/salary/updateOne/${id}`,value);
    // },
};









    