/*!

=========================================================
* Now UI Dashboard React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
    path: "/user-page",
    name: "Manage Users",
    icon: "design-2_ruler-pencil",
    component: < UserPage/>,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Receptionist List",
    icon: "files_paper",
    component: <Maps />,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Doctor List",
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
    path: "/extended-tables",
    name: "User List",
    icon: "files_paper",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Patient List",
    icon: "files_paper",
    component: <Typography />,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "objects_spaceship",
    component: <Upgrade />,
    layout: "/admin",
  },
];
export default dashRoutes;
