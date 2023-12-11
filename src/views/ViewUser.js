import React from "react";
import { useParams, Link } from "react-router-dom";
// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import axios from 'axios';
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import {useEffect, useState } from "react";

function ViewUser(){
  const param = useParams()

    // User const
  
    const [username, setId] = useState('');
    const [name, setName] = useState("");
    const [surname, setSName] = useState("");
    const [password, setPassword] = useState("");
    const [cellPhoneNumber, setCellPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [userType, setUserType] = useState("");
  
    const [visible, setVisible] = useState(false);
  
  
    //Patient const
      const [patientID, setPId] = useState('');
      // const [searchId, setSearchId] = useState('');
      const [user, setUser] = useState("");
      const [dob, setDOB] = useState("");
      const [weight, setWeight] = useState("");
      const [height, setHeight] = useState("");
      const [streetNumber, setStreetNumber] = useState("");
      const [streetName, setStreetName] = useState("");
      const [city, setCity] = useState("");
      const [province, setProvince] = useState("");
      const [patientMedicalInformation, setPatientMedicalInformation] = useState("");
      const [patients, setPatients] = useState([]);
  
    //Patient Medical Information 
  
      const [medicalRecordID, setMId] = useState('');
      const [medicalProblems, setMedicalProblems] = useState("");
      const [prescription, setPrescription] = useState("");
      const [medicalTestResults, setMedicalTestResults] = useState("");
      const [allergies, setAllergies] = useState("");
      const [chronicMedication, setChronicMedication] = useState("");
      const [immunisations, setImmunisations] = useState("");
      const [nextOfKin, setNextOfKin] = useState("");
      const [nokContact, setNextOfKinContact] = useState("");

      const [folderNumber, setFolderNumber] = useState("");
  
  
    useEffect(() => {
      (async () => await search())();
    }, []);
  
    //search function
    async function search(event) {
      // event.preventDefault();
  
      try {
        await axios.get("http://localhost:8080/E-Health-System/patient/read/" + param.patientID)
          .then((res) => {
            console.log(res.data);
          
            setId(res.data.user.username);
            setName(res.data.user.name);
            setSName(res.data.user.surname);
            setPassword(res.data.user.password);
            setCellPhoneNumber(res.data.user.cellPhoneNumber);
            setEmail(res.data.user.email);
            setUserType(res.data.user.userType);
            // setUserType(res.data.userType);
  
  
            setPId(res.data.patientID);
            //leave user in?
            setUser(res.data.user.username);
  
            setDOB(res.data.dob);
            setWeight(res.data.weight);
            setHeight(res.data.height);
            setStreetNumber(res.data.streetNumber);
            setStreetName(res.data.streetName);
            setCity(res.data.city);
            setProvince(res.data.province);
            
            //leave Patient Med Info Id in?
  
            setPatientMedicalInformation(res.data.patientMedicalInformation.medicalRecordID);
  
  
            setMId(res.data.patientMedicalInformation.medicalRecordID);
            setMedicalProblems(res.data.patientMedicalInformation.medicalProblems);
            setPrescription(res.data.patientMedicalInformation.prescription);
            setMedicalTestResults(res.data.patientMedicalInformation.medicalTestResults);
            setAllergies(res.data.patientMedicalInformation.allergies);
            setChronicMedication(res.data.patientMedicalInformation.chronicMedication)
            setImmunisations(res.data.patientMedicalInformation.immunisations);
            setNextOfKin(res.data.patientMedicalInformation.nextOfKin);
            setNextOfKinContact(res.data.patientMedicalInformation.nokContact);
            setFolderNumber(res.data.patientMedicalInformation.folderNumber);
  
            setPatients(res.data.patientID);
            
          });
      }
      catch (err) {
        alert("User search Failed");
      }
    }

         async function save(event)
        {
            event.preventDefault();
        try
            {
             await axios.post("http://localhost:8080/E-Health-System/patient/save",
            {
              patientID: patientID,
              user: user,
              dob: dob,
              weight: weight,
              height: height,
              streetNumber: streetNumber,
              streetName: streetName,
              city: city,
              province: province,
              patientMedicalInformation: patientMedicalInformation
            });
              alert("user Registation Successfully");
              setId("");
              setUser("");
              setAge("");
              setWeight("");
              setHeight("");
              setStreetNumber("");
              setStreetName("");
              setCity("");
              setProvince("");
              setPatientMedicalInformation("");
              Load();
            }
        catch(err)
            {
              alert("Failed to add patient");
            }
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
  
  
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md="8">
            <Card style={{width: '70rem'}}>
                <CardHeader>
                  <h5 className="title text-center">User {param.patientID} Information</h5>
                  <hr />
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="11">
                        {/* row 1 */}
                        <FormGroup>
                          <label>Username</label>
                          <Input type="text" id="username" disabled
                            value={username}
                            onChange={(event) => {
                              setId(event.target.value);
                            }}
                          />
                        </FormGroup>
                      </Col>
                      </Row>
                      <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          {/* row 2 col 1 */}
                          <label>Name</label>
                          <Input type="text" id="name" disabled
                            value={name}
                            onChange={(event) => {
                              setName(event.target.value);
                            }}
                          />
                        </FormGroup>
                      </Col>

                      <Col className="pr-1" md="5">
                        <FormGroup>
                          {/* row 2 col 1 */}
                          <label>Surname</label>
                          <Input type="text" id="name" disabled
                            value={surname}
                            onChange={(event) => {
                              setName(event.target.value);
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          {/* row 2 col 1 */}
                          <label>Phone Number</label>
                          <Input type="text" id="cellPhoneNumber" disabled
                            value={cellPhoneNumber}
                            onChange={(event) => {
                              setCellPhoneNumber(event.target.value);
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input type="text" id="email" disabled
                            value={email}
                            onChange={(event) => {
                              setEmail(event.target.value);
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="11">
                        <FormGroup>
                          <label>Password</label>
                          <InputGroup >
                            <Input type={visible ? "text" : "password"} id="password" disabled
                              value={password}
                              onChange={(event) => {
                                setPassword(event.target.value);
                              }}
                            />
                            {/* <InputGroupAddon addonType="append"> */}
                              <InputGroupText>
                                <div onClick={() => setVisible(!visible)}>
                                  {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                </div>
                              </InputGroupText>
                            {/* </InputGroupAddon> */}
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="11">
                        {/* <FormGroup> */}
                        <label  >User Type</label>
                        <br/>
                        {/* <Input type="text" id="userType"  */}
                        <select className="custom-select" md="11" disabled
                          value={userType}
  
                          onChange={(e) => {
                            const selectedType = e.target.value;
                            setUserType(selectedType);
                          }}
                        >
                          <option value=""></option>
                          <option value="patient">Patient</option>
                          <option value="Doctor" disabled>Doctor (Disabled)</option>
                          <option value="Pharmacist" disabled>Pharmacist (Disabled)</option>
                          <option value="Receptionist" disabled>Receptionist (Disabled)</option>
                          <option value="Administrator" disabled>Administrator (Disabled)</option>
                        </select>
                        {/* </FormGroup> */}
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
  
  {/* CHANGE INPUT ID AND VALUE */}
               {/* Patient creation */}
               <div className="author">
               <Card style={{width: '70rem'}}>
                <CardHeader>
                  <h5 className="title text-center">Patient Details</h5>
                  <hr />
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="11">
                        {/* row 1 */}
                        <FormGroup>
                          <label>Patient ID</label>
                          <Input type="text" id="patientID" disabled
                            value={patientID}
                            onChange={(event) => {
                              setPId(event.target.value);
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="11">
                        <FormGroup>
                          {/* row 2 col 1 */}
                          <label>User</label>
                          <Input type="text" id="user" disabled
                            value={user}
                            onChange={(event) => {
                              setUser(event.target.value);
                            }} 
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="11">
                        <FormGroup>
                          <label >
                          Date of Birth
                          </label>
                          <Input type="text" id="dob" disabled
                            value={dob}
                            onChange={(event) => {
                              setDOB(event.target.value);
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Weight</label>
                          <Input type="text" id="weight" disabled
                            value={weight}
                            onChange={(event) => {
                              setWeight(event.target.value);
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Height</label>
                            <Input type="text" id="height" disabled
                              value={height}
                              onChange={(event) => {
                                setHeight(event.target.value);
                              }}
                            />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="2"> 
                      <FormGroup>
                          <label >
                            Street Number
                          </label>
                          <Input type="text" id="streetNumber" disabled
                            value={streetNumber}
                            onChange={(event) => {
                              setStreetNumber(event.target.value);
                            }}
                          />
                        </FormGroup>
  
                       </Col>
                    <Col className="pr-1" md="9">
                        <FormGroup>
                          <label >
                            Street Name
                          </label>
                          <Input type="text" id="streetName" disabled
                            value={streetName}
                            onChange={(event) => {
                              setStreetName(event.target.value);
                            }}
                          />
                        </FormGroup>
                        </Col>
                                              
                    </Row>
                    <Row>
                        <Col className="pr-1" md="6">
                        <FormGroup>
                          <label >
                            City
                          </label>
                          <Input type="text" id="city" disabled
                            value={city}
                            onChange={(event) => {
                              setCity(event.target.value);
                            }}
                          />
                        </FormGroup>
                        </Col>
                        <Col className="pr-1" md="5">
                        <FormGroup>
                          <label >
                            Province
                          </label>
                          <Input type="text" id="province" disabled
                            value={province}
                            onChange={(event) => {
                              setProvince(event.target.value);
                            }}
                          />
                        </FormGroup>
                        </Col>
                        </Row>
                        <Col className="pr-1" md="11">
                        <FormGroup>
                          <label >
                            Patient Medical Information
                          </label>
                          <Input type="text" id="patientMedicalInformation" disabled
                            value={patientMedicalInformation}
                            onChange={(event) => {
                              setPatientMedicalInformation(event.target.value);
                            }}
                          />
                        </FormGroup>
                        </Col>
                  </Form>
                </CardBody>
              </Card>
                </div>
  
            {/* patientMedicalInformation */}
            <div className="author">
            <Card style={{width: '70rem'}}>
                <CardHeader>
                  <h5 className="title text-center">Patient Medical Information</h5>
                  <hr />
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="11">
                        {/* row 1 */}
                        <FormGroup>
                          <label>Medical Record ID</label>
                          <Input type="text" id="medicalRecordID" disabled
                            value={medicalRecordID}
                            onChange={(event) => {
                              setMId(event.target.value);
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="11">
                        <FormGroup>
                          {/* row 2 col 1 */}
                          <label>Medical Problems</label>
                          <Input type="text" id="medicalProblems" disabled
                            value={medicalProblems}
                            onChange={(event) => {
                              setMedicalProblems(event.target.value);
                            }} 
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="11">
                        <FormGroup>
                          <label >
                            Prescription
                          </label>
                          <Input type="text" id="prescription" disabled
                            value={prescription}
                            onChange={(event) => {
                              setPrescription(event.target.value);
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="11">
                        <FormGroup>
                          {/* row 2 col 1 */}
                          <label>Medical Test Results</label>
                          <Input type="text" id="medicalTestResults" disabled
                            value={medicalTestResults}
                            onChange={(event) => {
                              setMedicalTestResults(event.target.value);
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="11">
                        <FormGroup>
                          <label>Allergies</label>
                          <InputGroup > 
                            <Input type="text" id="allergies" disabled
                              value={allergies}
                              onChange={(event) => {
                                setAllergies(event.target.value);
                              }}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="11"> 
                      <FormGroup>
                          <label >
                            Chronic Medication
                          </label>
                          <Input type="text" id="chronicMedication" disabled
                            value={chronicMedication}
                            onChange={(event) => {
                              setChronicMedication(event.target.value);
                            }}
                          />
                        </FormGroup>
                       </Col>
                      
                    </Row>
                    <Col className="pr-1" md="11">
                        <FormGroup>
                          <label >
                            Immunisations
                          </label>
                          <Input type="text" id="immunisations" disabled
                            value={immunisations}
                            onChange={(event) => {
                              setImmunisations(event.target.value);
                            }}
                          />
                        </FormGroup>
                        </Col>
                        <Col className="pr-1" md="11">
                        <FormGroup>
                          <label >
                          Next Of Kin
                          </label>
                          <Input type="text" id="nextOfKin" disabled
                            value={nextOfKin}
                            onChange={(event) => {
                              setNextOfKin(event.target.value);
                            }}
                          />
                        </FormGroup>
                        <FormGroup>
                        <label >
                        Next Of Kin Contact Number
                        </label>
                        <Input type="text" id="nokContact" maxlength = "10" disabled
                          value={nokContact}
                          onChange={(event) => {
                            setNextOfKinContact(event.target.value);
                          }}
                        />
                        
                      </FormGroup>
                        </Col>
                        <Col className="pr-1" md="11">
                        <FormGroup>
                          <label >
                            Folder Number
                          </label>
                          <Input type="text" id="folderNumber" disabled
                            value={folderNumber}
                            onChange={(event) => {
                              setFolderNumber(event.target.value);
                            }}
                          />
                        </FormGroup>
                        </Col>
                  </Form>
                </CardBody>
              </Card>
                </div>                
  
  
            </Col>
          </Row>
        </div>
      </>
    );




}

export default ViewUser;