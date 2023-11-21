// import React from "react";

// // reactstrap components
// import {
//   Card,
//   CardBody,
//   CardHeader,
//   CardTitle,
//   Table,
//   Row,
//   Col,
// } from "reactstrap";

// // core components
// import PanelHeader from "components/PanelHeader/PanelHeader.js";

// import { tbody } from "variables/general";
// import axios from 'axios';
// import {useEffect, useState } from "react";

// function RegularTables() 
// {
//     const [receptionistID, setId] = useState('');
//     const [User, setUser] = useState("");
//     const [medicalFacility, setMedicalFacility] = useState("");
//     const [receptionists, setReceptionist] = useState([]);
 
//     const thead = ["receptionistID", "User", "medicalFacility"];

//     useEffect(() => {
//       (async () => await Load())();
//       }, []);


//       async function  Load()
//     {
//        const result = await axios.get(
//            "http://localhost:8080/E-Health-System/receptionist/all");
//            setReceptionist(result.data);
//            console.log(result.data);
//     }
   
  
    
//        async function save(event)
//       {
//           event.preventDefault();
//       try
//           {
//            await axios.post("http://localhost:8080/E-Health-System/receptionist/save",
//           {
//             receptionistID: receptionistId,
//             User: user,
//             medicalFacility: medicalFacility,

//           });
//             alert("user Registation Successfully");
//             setId("");
//             setUser("");
//             setMedicalFacility("");

//             Load();
//           }
//       catch(err)
//           {
//             alert("Receptionist Registation Failed");
//           }
//      }
  
   
//     //  async function editUsers(users)
//     //  {
//     //     setId(users._id);
//     //     setName(users.name);
//     //     setPassword(users.password);
//     //     setCellPhoneNumber(users.cellPhoneNumber);
//     //     setEmail(users.email);
//     //     setUserType(users.userType);
//     //     setId(users._id); //takeout 
//     //  }
   
//      async function DeleteUser(receptionistId)
//      {
//       try 
//       {

//           await axios.delete("http://localhost:8080/E-Health-System/receptionist/delete/" + receptionistId); 
//           alert("receptionist deleted Successfully");
//           Load();
//       }
//       catch(err)
//       {
//         // alert("delete failed");

//       }
//      }
   
//      async function update(event)
//      {
//       event.preventDefault();
   
//      try
//          {
//           await axios.put("localhost:8080/E-Health-System/receptionist/save"  ,
//          {
//           receptionistID: receptionistId,
//           User: user,
//           medicalFacility: medicalFacility,

//         });
//           alert("Receptionist Updated");
//           setId("");
//           setUser("");
//           setMedicalFacility("");

//            Load();
//          }
//      catch(err)
//          {
//            alert("Receptionist Update Failed");
//          }
//     }



//   return (
//     <>
//       <PanelHeader size="sm" />
//       <div className="content">
//         <Row>
//           <Col xs={12}>
//             <Card>
//               <CardHeader>
//                 <CardTitle tag="h4">Receptionist Table</CardTitle>
//               </CardHeader>
//               <CardBody>


//                 <Table responsive>
//                   <thead className="text-primary">
//                     <tr>
//                       {thead.map((prop, key) => {
//                         if (key === thead.length - 1)
//                           return (
//                             <th key={key} className="text-left">
//                               {prop}
//                             </th>
//                           );
//                         return <th key={key}>{prop}</th>;
//                       })}



//                     </tr>
//                   </thead>


//                   {receptionists.map(function fn(Receptionist)

//                     {
//                       return(
//                       <tbody>
//                           <tr>
//                           <td>{Receptionist.receptionistID}</td>
//                           <td>{Receptionist.user}</td>
//                           <td>{Receptionist.medicalFacility}</td>        
      
//                           <td>
      
//                               <button type="button" class="btn btn-danger" onClick={() => DeleteReceptionist(Receptionist.receptionistID)}>Delete</button>
//                           </td>
//                           </tr>
//                       </tbody>
//                       );
//                       })}
//                       </Table>
//                     </CardBody>
//                   </Card>
//                 </Col>
      
//               </Row>
//             </div>
//           </>
//         );
//       }
      
//       export default RegularTables;
      