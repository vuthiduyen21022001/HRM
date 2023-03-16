import editSalari from "../components/EditSalari/editSalari";
import EditUser from "../components/EditUser/editUser";
import editPositions from "../components/EditPositions/editPositions";

import EmployessPage from "../page/EmployessPage/EmployessPage";
import ManagePage from "../page/ManagePage/ManagePage";
import SalariePage from "../page/SalariePage/SalariePage";
import DepartmentsPage from "../page/DepartmentsPage/DepartmentsPage";
import CreateSalary from "../components/CreateSalry/CreateSalary";
import PositionsPage from "../page/PositionsPage/PositionsPage";
import CreatePosition from "../components/CreatePosition/CreatePosition";
import EditDepartments from "../components/EditDepartments/editDepartments";
import CreateDepartment from "../components/CreateDepartment/CreateDepartment";
export const adminRouter = [
  {
    path: "/usermanagement",
    Component: ManagePage,
  },
  {
    path: "/employees",
    Component: EmployessPage,
  },
  {
    path: "/salaries",
    Component: SalariePage,
  },
  {
    path: "/salaries/createsalary",
    Component: CreateSalary,
  },
  {
    path: "/positions/createposition",
    Component: CreatePosition,
  },
  {
    path: "/department/createdepartment",
    Component: CreateDepartment,
  },
  {
    path: "/positions",
    Component: PositionsPage,
  },
  {
    path: "/department",
    Component: DepartmentsPage,
  },

  {
    path: "/editUser/:id",
    Component: EditUser,
  },
  {
    path: "/editDepartments/:id",
    Component: EditDepartments,
  },
  
  {
    path: "/editSalari/:id",
    Component: editSalari,
  },
  {
    path: "/editPositions/:id",
    Component: editPositions,
  },

];
