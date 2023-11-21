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
    const [medicalFacilityID, setId] = useState('');
    const [name, setName] = useState("");
    const [streetNumber, setStreetNumber] = useState("");
    const [streetName, setStreetName] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [type, setType] = useState("");
    const [medicalFacilitys, setmedicalFacilitys] = useState([]);
    const thead = ["ID", "name", "streetNumber", "StreetName", "city", "province", "email", "phoneNumber", "type"];

    useEffect(() => {
      (async () => await Load())();
      }, []);


      async function  Load()
    {
       const result = await axios.get(
           "http://localhost:8080/E-Health-System/medicalFacility/all");
           setmedicalFacilitys(result.data);
           console.log(result.data);
    }
   
  
    
       async function save(event)
      {
          event.preventDefault();
      try
          {
           await axios.post("http://localhost:8080/E-Health-System/medicalFacility/save",
          {
            medicalFacilityID: medicalFacilityID,
            name: name,
            streetNumber: streetNumber,
            streetName: streetName,
            city: city,
            province: province,
            email: email,
            phoneNumber: phoneNumber,
            type: type
            
          });
            alert("MedicalFacility added Successfully");
            setId("");
            setName("");
            setStreetNumber("");
            setStreetName("");
            setCity("");
            setProvince("");
            setEmail("");
            setPhoneNumber("");
            setType("");

            Load();
          }
      catch(err)
          {
            alert("MedicalFacility Failed to add");
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
   
     async function DeleteUser(medicalFacilityId)
     {
      try 
      {

          await axios.delete("http://localhost:8080/E-Health-System/medicalFacility/delete/" + medicalFacilityId); 
          alert("medicalFacility deleted Successfully");
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
          await axios.put("localhost:8080/E-Health-System/medicalFacility/save"  ,
         {
  
            medicalFacilityID: medicalFacilityID,
            name: name,
            streetNumber: streetNumber,
            streetName: streetName,
            city: city,
            province: province,
            email: email,
            phoneNumber: phoneNumber,
            type: type
         
         });
           alert("MedicalFacility Updated");
           
           setId("");
           setName("");
           setStreetNumber("");
           setStreetName("");
           setCity("");
           setProvince("");
           setEmail("");
           setPhoneNumber("");
           setType("");

           Load();
         }
     catch(err)
         {
           alert("MedicalFacility Update Failed");
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
                <CardTitle tag="h4">Medical Facility Table</CardTitle>
              </CardHeader>
              <CardBody>


                <Table responsive>
                  <thead className="text-primary" >
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


                  {medicalFacilitys.map(function fn(medicalFacility)
           {
                return(
                <tbody style={{ fontSize: "12px", whiteSpace:"nowrap" }} >
                    <tr>
                    <td>{medicalFacility.medicalFacilityID}</td>
                    <td >{medicalFacility.name}</td>
                    <td>{medicalFacility.streetNumber}</td>        
                    <td>{medicalFacility.streetName}</td>   
                    <td>{medicalFacility.city}</td>   
                    <td>{medicalFacility.province}</td>
                    <td>{medicalFacility.email}</td> 
                    <td>{medicalFacility.phoneNumber}</td> 
                    <td>{medicalFacility.type}</td>    

                    <td>

                        <button type="button" class="btn btn-danger" onClick={() => DeleteUser(medicalFacility.medicalFacilityID)}>Delete</button>
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
