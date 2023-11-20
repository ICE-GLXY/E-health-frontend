import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from 'axios';
import {useEffect, useState } from "react";
// const ComboBoxComponent = () => {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };
function User() {

  const [username, setId] = useState('');
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cellPhoneNumber, setCellPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [users, setUsers] = useState([]);


 
useEffect(() => {
  (async () => await Load())();
  }, []);
 
 
  async function  Load()
  {
     const result = await axios.get(
         "http://localhost:8080/E-Health-System/User/all");
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

 
   async function editUsers(users)
   {
      setId(users.username);
      setName(users.name);
      setPassword(users.password);
      setCellPhoneNumber(users.cellPhoneNumber);
      setEmail(users.email);
      setUserType(users.userType);
      // setId(users.users); //takeout 
   }
 
   async function DeleteUser(userId)
   {
        await axios.delete("http://localhost:8080/E-Health-System/User/delete/" + userId); 
        alert("user deleted Successfully");
        Load();
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
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="9">
                      {/* row 1 */}
                      <FormGroup>
                        <label>Username</label>
                        <Input type="text" id="username"
                    value={username}
                    onChange={(event) =>
                      {
                        setId(event.target.value);      
                      }}
                          // defaultValue=""
                          // // disabled
                          // placeholder="Username"
                          // type="text"
                        />
                      </FormGroup>
                    </Col>
                    
                    
                    <Col className="pr-1" md="9">
                      <FormGroup>
                        {/* row 2 col 1 */}
                        <label>Cell Phone number</label>
                        <Input type="text" id="cellPhoneNumber" 
                      value={cellPhoneNumber}
                      onChange={(event) =>
                      {
                        setCellPhoneNumber(event.target.value);      
                      }}
                        />
                      </FormGroup>
                    </Col>

                    <Col className="pr-1" md="9">
                      <FormGroup>
                        
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input type="text" id="email" 
                      value={email}
                    onChange={(event) =>
                      {
                        setEmail(event.target.value);      
                      }}
                        />
                      </FormGroup>
                    </Col>
                  
                  </Row>
                  <Row>
                  
                    <Col className="pr-1" md="9">
                      <FormGroup>
                        {/* row 2 col 1 */}
                        <label>Name and Surname</label>
                        <Input type="text" id="name" 
                     value={name}
                      onChange={(event) =>
                        {
                          setName(event.target.value);      
                        }}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="9">
                      {/* <FormGroup>
                        <label>Password</label>
                        <Input
                          defaultValue=""
                          placeholder="Password"
                          type="password"
                        />
                      </FormGroup> */}
                    </Col>
                  </Row>
                  <Row>
                    <Col md="5">
                      <FormGroup>
                        {/* <label>User Type</label>
                        <Input
                          defaultValue=""
                          placeholder="User Type"
                          type="text"
                        /> */}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="9">
                    <FormGroup>
                        <label>Password</label>
                        <Input type="text" id="password" 
                      value={password}
                    onChange={(event) =>
                      {
                        setPassword(event.target.value);      
                      }}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        {/* col 2 row 3 */}

                        {/* <label>Country</label>
                        <Input
                          defaultValue="Andrew"
                          placeholder="Country"
                          type="text"
                        /> */}
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      {/* col 3 row 3 */}

                      {/* <FormGroup>
                        <label>Postal Code</label>
                        <Input placeholder="ZIP Code" type="number" />
                      </FormGroup> */}
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-1" md="9">
                    <FormGroup>
                      <label>User Type</label>
                        <Input type="text" id="userType" 
                      value={userType}
                    onChange={(event) =>
                      {
                        setUserType(event.target.value);      
                      }}
                        />
                        
                      </FormGroup>
                    </Col>
                    
                    
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          {/* Right card in Manage Users */}
          <Col md="4"  >
            <Card className="card-user">
              {/* <div className="image"> */}

              <br/>
              
              
              <form>
            <InputGroup className="no-border">
              <Input placeholder="Search..." />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <i className="now-ui-icons ui-1_zoom-bold" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </form>
              {/* </div> */}


              
              <CardBody>
              
                <br/>
                <br/>
                <br/>
                <br/>
                

                
                
              
              
                <div className="author" >
                <button type="Update" class="btn btn-danger"  onClick={save}>Register</button>
                <button type="button" class="btn btn-danger" onClick={() => DeleteUser(User.username)}>Delete</button>
                <hr />
                </div>
               
              </CardBody>
             
              <div className="author">
                

                </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
// }

export default User;

