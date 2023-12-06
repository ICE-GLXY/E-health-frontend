import Home from "views/Home.js";

import QrCode from "views/QrCode.js";
import NurseList from "views/NurseList.js";
import PatientMedicalInformation from "views/PatientMedicalInformation.js";
import UserList from "views/UserList.js";
import PatientList from "views/PatientList.js";
import Upgrade from "views/Upgrade.js";
import ManageUsers from "views/ManageUsers.js";
import ViewUser from "views/ViewUser.js";
import MedicalFacility from "views/MedicalFacility.js"
import Disclaimer from "views/Disclaimer.js";

var dashRoutes = [
  {
    path: "/Home",
    name: "Home",
    icon: "shopping_shop",
    component: <Home />,
    layout: "/admin",
  },
  {
    path: "/UserList",
    name: "User List",
    icon: "files_paper",
    component: <UserList />,
    layout: "/admin",
  },
  {
    path: "/ManageUsers",
    name: "Manage Users",
    icon: "design-2_ruler-pencil",
    component: < ManageUsers/>,
    layout: "/admin",
  },
  {
    path: "/PatientList",
    name: "Patient List",
    icon: "files_paper",
    component: <PatientList />,
    layout: "/admin",
  },
  {
    path: "/PatientMedicalInformation",
    name: "Patient Medical Information",
    icon: "files_paper",
    component: <PatientMedicalInformation />,
    layout: "/admin",
  },
  // {
  //   path: "/NurseList",
  //   name: "Nurse List",
  //   icon: "users_single-02",
  //   component: <NurseList />,
  //   layout: "/admin",
  // },
  
  // {
  //   path: "/MedicalFacility",
  //   name: "Medical Facility",
  //   icon: "files_paper",
  //   component: <MedicalFacility />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/QrCode",
  //   name: "Qr Code",
  //   icon: "files_paper",
  //   component: <QrCode />,
  //   layout: "/admin",
  // },
  {
    path: "/ViewUser/:patientID",
    component: <ViewUser />,
  },
  {
    path: "Disclaimer",
    component: <Disclaimer />,
  },
];
export default dashRoutes;
