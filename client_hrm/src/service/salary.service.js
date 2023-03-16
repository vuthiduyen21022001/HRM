
import { https } from "./configURL"

export const salaryService = {
    createSalari: (value) => {
        return https.post("/api/salary/addSalary",value);

    },
    updateSalari: (id, s) => {
        return https.put(`/api/salary/updateSalary/${id}`, s);

    },
    deleteSalary: (id) => {
        return https.delete(`/api/salary/deleteSalary/${id}`);
    },
    getSalaryList: () => {
        return https.get("/api/salary/listSalary");
    },
}