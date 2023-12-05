import React, { Component } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import axios from 'axios';
import {useEffect, useState } from "react";



function RegularTables() 
{
  
    const [patientID, setId] = useState('');
    // const [username, setUser] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [streetNumber, setStreetNumber] = useState("");
    const [streetName, setStreetName] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    // const [patientMedicalInformation, setPatientMedicalInformation] = useState("");
    const [patients, setPatients] = useState([]);

    const thead = ["Patient ID", "ID number", "Username", "Age", "Weight", "Height", "Street Number", "Street Name", "City", "Province", "Medical Record ID"];

    useEffect(() => {
      (async () => await Load())();
      }, []);


      async function  Load()
    {
       const result = await axios.get(
           "http://localhost:8080/E-Health-System/patient/all");
           
           setPatients(result.data);
           
           console.log(result.data);
    }
   
     async function DeletePatient(patientId)
     {
      try 
      {

          await axios.delete("http://localhost:8080/E-Health-System/patient/delete/" + patientId); 
          alert("patient deleted Successfully"); 
          Load(); 
      }
      catch(err)
      {
        alert("delete failed");

      }
     }
// QR code
    //  async function QrCode()
    //  {
    //   alert("test1");
    //   try 
    //   {
    //     alert("test2");
    //       await axios.post("http://localhost:8080/E-Health-System/User/uploadQrCode"); 
    //       alert("user deleted Successfully");
    //       // Load();
    //   }
    //   catch(err)
    //   {
    //     // alert("delete failed");

    //   }
    //  }
   
    


  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
        <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Patient Table</CardTitle>
              </CardHeader>
              <CardBody>


                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      {thead.map((prop, key) => {
                        if (key === thead.length - 1)
                          return (
                            <th key={key} className="text-left">
                              {prop}
                            </th>
                          );
                        return <th key={key}>{prop}</th>;
                      })}



                    </tr>
                  </thead>


                  {patients.map(function fn(patient)
           {
                return(
                <tbody>
                    <tr>
                    <td>{patient.patientID}</td>
                    <td>{patient.idNumber}</td>
                    <td>{patient.user.username}</td>
                    <td>{patient.age}</td>        
                    <td>{patient.weight}</td>   
                    <td>{patient.height}</td>   
                    <td>{patient.streetNumber}</td>   
                    <td>{patient.streetName}</td>  
                    <td>{patient.city}</td>  
                    <td>{patient.province}</td>  
                    <td>{patient.patientMedicalInformation.medicalRecordID}</td>

                    <td>

                    <div key={patient.patientID}>
            <Link
              to={{
                pathname: `/admin/ViewUser/${patient.patientID}`,
                state: { patients: patient }
              }}
              >
              <button type="button" class="btn btn-danger">View</button>
            </Link>
          </div>
</td>
<td>
                        <button type="button" class="btn btn-danger" onClick={() => DeletePatient(patient.patientId)}>Delete</button>
                    </td>
                    </tr>
                </tbody>
                );
                })}
                </Table>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>
      
    </>
  );
}
export default RegularTables;
