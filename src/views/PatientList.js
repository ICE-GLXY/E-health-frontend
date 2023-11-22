// import React, { Component } from "react";

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

// import { thead, tbody } from "variables/general";
// import axios from 'axios';
// import {useEffect, useState } from "react";



// function RegularTables() 
// {
  
//     const [patientID, setId] = useState('');
//     const [user, setUser] = useState("");
//     const [age, setAge] = useState("");
//     const [weight, setWeight] = useState("");
//     const [height, setHeight] = useState("");
//     const [streetNumber, setStreetNumber] = useState("");
//     const [streetName, setStreetName] = useState("");
//     const [city, setCity] = useState("");
//     const [province, setProvince] = useState("");
//     const [patientMedicalInformation, setPatientMedicalInformation] = useState("");
//     const [patients, setPatients] = useState([]);


//     useEffect(() => {
//       (async () => await Load())();
//       }, []);


//       async function  Load()
//     {
//        const result = await axios.get(
//            "http://localhost:8080/E-Health-System/patient/all");
//            setPatients(result.data);
//            console.log(result.data);
//     }
   
  
    
//        async function save(event)
//       {
//           event.preventDefault();
//       try
//           {
//            await axios.post("http://localhost:8080/E-Health-System/patient/save",
//           {
//             patientID: patientID,
//             user: user,
//             age: age,
//             weight: weight,
//             height: height,
//             streetNumber: streetNumber,
//             streetName: streetName,
//             city: city,
//             province: province,
//             patientMedicalInformation: patientMedicalInformation
//           });
//             alert("user Registation Successfully");
//             setId("");
//             setUser("");
//             setAge("");
//             setWeight("");
//             setHeight("");
//             setStreetNumber("");
//             setStreetName("");
//             setCity("");
//             setProvince("");
//             setPatientMedicalInformation("");
//             Load();
//           }
//       catch(err)
//           {
//             alert("Failed to add patient");
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
   
//      async function DeletePatient(patientId)
//      {
//       try 
//       {

//           await axios.delete("http://localhost:8080/E-Health-System/patient/delete/" + patientId); 
//           alert("patient deleted Successfully");
//           Load();
//       }
//       catch(err)
//       {
//         // alert("delete failed");

//       }
//      }
// // QR code
//     //  async function QrCode()
//     //  {
//     //   alert("test1");
//     //   try 
//     //   {
//     //     alert("test2");
//     //       await axios.post("http://localhost:8080/E-Health-System/User/uploadQrCode"); 
//     //       alert("user deleted Successfully");
//     //       // Load();
//     //   }
//     //   catch(err)
//     //   {
//     //     // alert("delete failed");

//     //   }
//     //  }
   
//      async function update(event)
//      {
//       event.preventDefault();
   
//      try
//          {
//           await axios.put("localhost:8080/E-Health-System/patient/save"  ,
//          {
  
//           patientID: patientID,
//             user: user,
//             age: age,
//             weight: weight,
//             height: height,
//             streetNumber: streetNumber,
//             streetName: streetName,
//             city: city,
//             province: province,
//             patientMedicalInformation: patientMedicalInformation
         
//          });
//            alert("Patient Updated");
//             setId("");
//             setUser("");
//             setAge("");
//             setWeight("");
//             setHeight("");
//             setStreetNumber("");
//             setStreetName("");
//             setCity("");
//             setProvince("");
//             setPatientMedicalInformation("");
//             Load();
//          }
//      catch(err)
//          {
//            alert("Failed to update patient");
//          }
//     }


//   return (
//     <>
//       <PanelHeader size="sm" />
//       <div className="content">
//         <Row>
//         <Col xs={12}>
//             <Card>
//               <CardHeader>
//                 <CardTitle tag="h4">Patient Table</CardTitle>
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


//                   {patients.map(function fn(patient)
//            {
//                 return(
//                 <tbody>
//                     <tr>
//                     <td>{patient.patientID}</td>
//                     <td>{patient.user}</td>
//                     <td>{patient.age}</td>        
//                     <td>{patient.weight}</td>   
//                     <td>{patient.height}</td>   
//                     <td>{patient.streetNumber}</td>   
//                     <td>{patient.streetName}</td>  
//                     <td>{patient.city}</td>  
//                     <td>{patient.province}</td>  
//                     <td>{patient.patientMedicalInformation}</td>  

//                     <td>

//                         <button type="button" class="btn btn-danger" onClick={() => DeleteUser(patient.patientID)}>Delete</button>
//                     </td>
//                     </tr>
//                 </tbody>
//                 );
//                 })}
//                 </Table>
//               </CardBody>
//             </Card>
//           </Col>
//           <div class="container" style={{backgroundColor: "green"}}>
//     <h1>Choose your QR code image file to upload.</h1>

//     {/* <p class="text-danger" th:if="${errorMessage}" th:text="${errorMessage}"></p>
//      <p class="text-success" th:if="${successMessage}" th:text="${successMessage}"></p>
//      <p class="text-primary" th:if="${qrContent}" th:text="${qrContent}"></p> */}
     
//     <form method="POST" enctype="multipart/form-data" action="/upload">
//         <div class="form-group">
//             <label for="qrCodeFile">File to upload</label>
//             <input type="file" class="form-control-file" id="qrCodeFile" name="qrCodeFile" />
//         </div>
//         {/* <button type="submit" class="btn btn-primary">Upload</button> */}
//         <button type="submit" class="btn btn-danger" onClick={() => QrCode()}>submit</button>
//     </form>
// </div>
//         </Row>
//       </div>
      
//     </>
//   );
// }
// export default RegularTables;
