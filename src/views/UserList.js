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
    const [username, setId] = useState('');
    const [name, setName] = useState("");
    const [surname, setSName] = useState("");
    const [password, setPassword] = useState("");
    const [cellPhoneNumber, setCellPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [userType, setUserType] = useState("");
    const [users, setUsers] = useState([]);

    const thead = ["User", "Name", "Surname", "Password", "Phone Number","Email","User Type"];


    useEffect(() => {
      (async () => await Load())();
      }, []);


      async function  Load()
    {
       const result = await axios.get(
           "http://localhost:8080/E-Health-System/patient/all");
           setUsers(result.data);
           console.log(result.data);
    }
   
  
    
       async function save(event)
      {
          event.preventDefault();
      try
          {
           await axios.post("http://localhost:8080/E-Health-System/User/save",
          {
            username: username,
            name: name,
            surname:surname,
            password: password,
            cellPhoneNumber: cellPhoneNumber,
            email: email,
            userType: userType
          });
            alert("user Registation Successfully");
            setId("");
            setName("");
            setPassword("");
            setCellPhoneNumber("");
            setEmail("");
            setUserType("");
            Load();
          }
      catch(err)
          {
            alert("User Registation Failed");
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
   
     async function DeleteUser(userId)
     {
      try 
      {

          await axios.delete("http://localhost:8080/E-Health-System/User/delete/" + userId); 
          alert("user deleted Successfully");
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
          await axios.put("localhost:8080/E-Health-System/User/save"  ,
         {
  
          username: username,
            name: name,
            password: password,
            cellPhoneNumber: cellPhoneNumber,
            email: email,
            userType: userType
         
         });
           alert("Registation Updated");
           setId("");
           setName("");
           setPassword("");
           setCellPhoneNumber("");
           setEmail("");
           setUserType("");
           Load();
         }
     catch(err)
         {
           alert("user Updateddd Failed");
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
                <CardTitle tag="h4" style={{ color: 'Black', fontSize: '25px', fontFamily:'Verdana', fontWeight:'bold'}}>User Table</CardTitle>
              </CardHeader>
              <CardBody>


                <Table responsive bordered>
                  <thead className="text-primary" style={{ color: '', fontSize: '', fontFamily:'Verdana', fontWeight:'bold'}}>
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


                  {users.map(function fn(patient)
           {
                return(
                <tbody >
                    <tr>
                    <td>{patient.user.username}</td>
                    <td>{patient.user.name}</td>
                    <td>{patient.user.surname}</td>
                    <td>{patient.user.password}</td>        
                    <td>{patient.user.cellPhoneNumber}</td>   
                    <td>{patient.user.email}</td>   
                    <td>{patient.user.userType}</td>   

                    <td>

                        <button type="button" class="btn btn-danger" onClick={() => DeleteUser(User.username)}>Delete</button>
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
