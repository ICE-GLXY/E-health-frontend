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
import { thead, tbody } from "variables/general";
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
           "http://localhost:8080/E-Health-System/patientMedicalInformation/all");
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
                <CardTitle tag="h4">Patient Medical Information Table</CardTitle>
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


                  {patientMedicalInformations.map(function fn(patientMedicalInformation)
           {
                return(
                <tbody>
                    <tr>
                    <td>{patientMedicalInformation.medicalRecordID}</td>
                    <td>{patientMedicalInformation.medicalProblems}</td>
                    <td>{patientMedicalInformation.prescription}</td>        
                    <td>{patientMedicalInformation.medicalTestResults}</td>   
                    <td>{patientMedicalInformation.allergies}</td>   
                    <td>{patientMedicalInformation.chronicMedication}</td>
                    <td>{patientMedicalInformation.immunisations}</td> 
                    <td>{patientMedicalInformation.hospitalisations}</td> 
                    <td>{patientMedicalInformation.folderNumber}</td>    

                    <td>

                        <button type="button" class="btn btn-danger" onClick={() => DeleteUser(patientMedicalInformation.medicalRecordID)}>Delete</button>
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
