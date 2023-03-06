

import editSalari from "../components/EditSalari/editSalari";
import EditUser from "../components/EditUser/editUser";

import EmployessPage from "../page/EmployessPage/EmployessPage";
import ManagePage from "../page/ManagePage/ManagePage";
import SalariePage from "../page/SalariePage/SalariePage";

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
    path: "/editUser/:id",
    Component: EditUser,
  },
  {
    path: "/editSalari/:id",
    Component: editSalari,
  },
];
