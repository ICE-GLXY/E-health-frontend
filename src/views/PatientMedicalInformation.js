import React from "react";

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
    const [medicalRecordID, setId] = useState('');
    const [medicalProblems, setMedicalProblems] = useState("");
    const [prescription, setPrescription] = useState("");
    const [medicalTestResults, setMedicalTestResults] = useState("");
    const [allergies, setAllergies] = useState("");
    const [chronicMedication, setChronicMedication] = useState("");
    const [immunisations, setImmunisations] = useState("");
    const [hospitalisations, setHospitalisations] = useState("");
    const [folderNumber, setFolderNumber] = useState("");
    const [patientMedicalInformations, setPatientMedicalInformations] = useState([]);
    const thead = ["Medical Record ID", "Medical Problems", "Prescription", "Medical Test Results", "Allergies", "Chronic Medication", "Immunisations", "Hospitalisations", "Folder Number"];

    useEffect(() => {
      (async () => await Load())();
      }, []);


      async function  Load()
    {
       const result = await axios.get(
           "http://localhost:8080/E-Health-System/patient/all");
           setPatientMedicalInformations(result.data);
           console.log(result.data);
    }
   
  
    
       async function save(event)
      {
          event.preventDefault();
      try
          {
           await axios.post("http://localhost:8080/E-Health-System/patientMedicalInformation/save",
          {
            medicalRecordID: medicalRecordID,
            medicalProblems: medicalProblems,
            prescription: prescription,
            medicalTestResults: medicalTestResults,
            allergies: allergies,
            chronicMedication: chronicMedication,
            immunisations: immunisations,
            hospitalisations: hospitalisations,
            folderNumber: folderNumber
            
            
          });
            alert("Patient Medical Information added Successfully");
            setId("");
            setMedicalProblems("");
            setPrescription("");
            setMedicalTestResults("");
            setAllergies("");
            setChronicMedication("");
            setImmunisations("");
            setHospitalisations("");
            setFolderNumber("");

            Load();
          }
      catch(err)
          {
            alert("Failed to add Patient Medical Information ");
          }
     }
  
   
    //  async function editUsers(users)
    //  {
    //     setId(users._id);
    //     setName(users.name);
    //     setPassword(users.password);
    //     setCellPhoneNumber(users.cellPhoneNumber);
    //     setEmail(users.email);
    //     setUserType(users.userType);
    //     setId(users._id); //takeout 
    //  }
   
     async function DeleteUser(medicalRecordID)
     {
      try 
      {

          await axios.delete("http://localhost:8080/E-Health-System/patientMedicalInformation/delete/" + medicalRecordID); 
          alert("Patient Medical Information deleted Successfully");
          Load();
      }
      catch(err)
      {
        // alert("delete failed");

      }
     }
   
     async function update(event)
     {
      event.preventDefault();
   
     try
         {
          await axios.put("localhost:8080/E-Health-System/patientMedicalInformation/save"  ,
         {
  
          medicalRecordID: medicalRecordID,
          medicalProblems: medicalProblems,
          prescription: prescription,
          medicalTestResults: medicalTestResults,
          allergies: allergies,
          chronicMedication: chronicMedication,
          immunisations: immunisations,
          hospitalisations: hospitalisations,
          folderNumber: folderNumber
         
         });
         alert("Patient Medical Information Updated");
         setId("");
         setMedicalProblems("");
         setPrescription("");
         setMedicalTestResults("");
         setAllergies("");
         setChronicMedication("");
         setImmunisations("");
         setHospitalisations("");
         setFolderNumber("");

           Load();
         }
     catch(err)
         {
           alert("Patient Medical Information Update Failed");
         }
    }


  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
        <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4" style={{ color: 'Black', fontSize: '25px', fontFamily:'Verdana', fontWeight:'bold'}}>Patient Medical Information Table</CardTitle>
              </CardHeader>
              <CardBody>


                <Table responsive bordered>
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


                  {patientMedicalInformations.map(function fn(patient)
           {
                return(
                <tbody>
                    <tr>
                    <td>{patient.patientMedicalInformation.medicalRecordID}</td>
                    <td>{patient.patientMedicalInformation.medicalProblems}</td>
                    <td>{patient.patientMedicalInformation.prescription}</td>        
                    <td>{patient.patientMedicalInformation.medicalTestResults}</td>   
                    <td>{patient.patientMedicalInformation.allergies}</td>   
                    <td>{patient.patientMedicalInformation.chronicMedication}</td>
                    <td>{patient.patientMedicalInformation.immunisations}</td> 
                    <td>{patient.patientMedicalInformation.hospitalisations}</td> 
                    <td>{patient.patientMedicalInformation.folderNumber}</td>    

                    {/* <td>

                        <button type="button" class="btn btn-danger" onClick={() => DeleteUser(patientMedicalInformation.medicalRecordID)}>Delete</button>
                    </td> */}
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
