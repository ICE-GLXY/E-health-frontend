import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: "shopping_shop",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/extended-tables",
    name: "User List",
    icon: "files_paper",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "Manage Users",
    icon: "design-2_ruler-pencil",
    component: < UserPage/>,
    layout: "/admin",
  },
  // {
  //   path: "/maps",
  //   name: "Receptionist List",
  //   icon: "files_paper",
  //   component: <Maps />,
  //   layout: "/admin",
  // },
  {
    path: "/notifications",
    name: "Patient Medical Information",
    icon: "files_paper",
    component: <Notifications />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Nurse List",
    icon: "users_single-02",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Medical Facility",
    icon: "files_paper",
    component: <Typography />,
    layout: "/admin",
  },
];
export default dashRoutes;
