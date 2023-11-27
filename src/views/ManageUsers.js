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
  
  // InputGroupAddon,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from 'axios';
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

function User() {

  // User const

  const [username, setId] = useState('');
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cellPhoneNumber, setCellPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [users, setUsers] = useState([]);
  const [searchId, setSearchId] = useState('');

  const [visible, setVisible] = useState(false);


  //Patient const
    const [patientID, setPId] = useState('');
    // const [searchId, setSearchId] = useState('');
    const [user, setUser] = useState("");
    const [age, setAge] = useState("");
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
    const [hospitalisations, setHospitalisations] = useState("");
    const [folderNumber, setFolderNumber] = useState("");


  useEffect(() => {
    (async () => await Load())();
  }, []);


  async function Load() {
    const result = await axios.get(
      "http://localhost:8080/E-Health-System/patient/all");
      setPatients(result.data);
    console.log(result.data);
  }

  //search function
  async function search(event) {
    event.preventDefault();

    try {
      await axios.get("http://localhost:8080/E-Health-System/patient/read/" + searchId)
      // await axios.get("http://localhost:8080/E-Health-System/User/read/" + searchId)
        .then((res) => {
          console.log(res.data);
        
          setId(res.data.user.username);
          setName(res.data.user.name);
          setPassword(res.data.user.password);
          setCellPhoneNumber(res.data.user.cellPhoneNumber);
          setEmail(res.data.user.email);
          setUserType(res.data.user.userType);
          // setUserType(res.data.userType);


          setPId(res.data.patientID);
          //leave user in?
          setUser(res.data.user.username);

          setAge(res.data.age);
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
          setHospitalisations(res.data.patientMedicalInformation.hospitalisations);
          setFolderNumber(res.data.patientMedicalInformation.folderNumber);
          
        });
    }
    catch (err) {
      alert("User search Failed");
    }
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/E-Health-System/User/save",
        {
          username: username,
          name: name,
          password: password,
          cellPhoneNumber: cellPhoneNumber,
          email: email,
          userType: userType
        });
      alert("User Saved Successfully");
      setId("");
      setName("");
      setPassword("");
      setCellPhoneNumber("");
      setEmail("");
      setUserType("");
      Load();
    }
    catch (err) {
      alert("User Saving Failed");
    }
  }

  async function DeleteUser(event) {
    event.preventDefault();
    try {
      alert("User deleted");
      await axios.delete("http://localhost:8080/E-Health-System/User/delete/" + searchId)
        .then((res) => {
          console.log(res.data);
          setId("");
          setName("");
          setPassword("");
          setCellPhoneNumber("");
          setEmail("");
          setUserType("");
          Load();
        });
    }
    catch (err) {
      alert("User delete Failed");
    }


      //Patient GET (not used?)

           const result = await axios.get(
           "http://localhost:8080/E-Health-System/patient/all");
           setPatients(result.data);
           console.log(result.data);
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
            age: age,
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
        // alert("delete failed");

      }
   
     async function update(event)
     {
      event.preventDefault();
   
     try
         {
          await axios.put("localhost:8080/E-Health-System/patient/save"  ,
         {
  
          patientID: patientID,
            user: user,
            age: age,
            weight: weight,
            height: height,
            streetNumber: streetNumber,
            streetName: streetName,
            city: city,
            province: province,
            patientMedicalInformation: patientMedicalInformation
         
         });
           alert("Patient Updated");
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
           alert("Failed to update patient");
         }
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
                <h5 className="title text-center">User Creation</h5>
                <hr />
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="11">
                      {/* row 1 */}
                      <FormGroup>
                        <label>Username</label>
                        <Input type="text" id="username"
                          value={username}
                          onChange={(event) => {
                            setId(event.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="11">
                      <FormGroup>
                        {/* row 2 col 1 */}
                        <label>Phone Number</label>
                        <Input type="text" id="cellPhoneNumber"
                          value={cellPhoneNumber}
                          onChange={(event) => {
                            setCellPhoneNumber(event.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="11">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input type="text" id="email"
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
                        {/* row 2 col 1 */}
                        <label>Name and Surname</label>
                        <Input type="text" id="name"
                          value={name}
                          onChange={(event) => {
                            setName(event.target.value);
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
                          <Input type={visible ? "text" : "password"} id="password"
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
                      {/* <Input type="text" id="userType"  */}
                      <select className="custom-select"
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
              <Card>
              <CardHeader>
                <h5 className="title text-center">Add Patient Details</h5>
                <hr />
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="11">
                      {/* row 1 */}
                      <FormGroup>
                        <label>Patient ID</label>
                        <Input type="text" id="patientID"
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
                        <Input type="text" id="user"
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
                          Age
                        </label>
                        <Input type="text" id="age"
                          value={age}
                          onChange={(event) => {
                            setAge(event.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="11">
                      <FormGroup>
                        {/* row 2 col 1 */}
                        <label>Weight</label>
                        <Input type="text" id="weight"
                          value={weight}
                          onChange={(event) => {
                            setWeight(event.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="11">
                      <FormGroup>
                        <label>Height</label>
                        <InputGroup >
                          <Input type="text" id="height"
                            value={height}
                            onChange={(event) => {
                              setHeight(event.target.value);
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
                          Street Number
                        </label>
                        <Input type="text" id="streetNumber"
                          value={streetNumber}
                          onChange={(event) => {
                            setStreetNumber(event.target.value);
                          }}
                        />
                      </FormGroup>

                     </Col>
                    
                  </Row>
                  <Col className="pr-1" md="11">
                      <FormGroup>
                        <label >
                          Street Name
                        </label>
                        <Input type="text" id="streetName"
                          value={streetName}
                          onChange={(event) => {
                            setStreetName(event.target.value);
                          }}
                        />
                      </FormGroup>
                      </Col>
                      <Col className="pr-1" md="11">
                      <FormGroup>
                        <label >
                          City
                        </label>
                        <Input type="text" id="city"
                          value={city}
                          onChange={(event) => {
                            setCity(event.target.value);
                          }}
                        />
                      </FormGroup>
                      </Col>
                      <Col className="pr-1" md="11">
                      <FormGroup>
                        <label >
                          Province
                        </label>
                        <Input type="text" id="province"
                          value={province}
                          onChange={(event) => {
                            setProvince(event.target.value);
                          }}
                        />
                      </FormGroup>
                      </Col>
                      <Col className="pr-1" md="11">
                      <FormGroup>
                        <label >
                          Patient Medical Information
                        </label>
                        <Input type="text" id="patientMedicalInformation"
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
              <Card>
              <CardHeader>
                <h5 className="title text-center">Add Patient Medical Information</h5>
                <hr />
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="11">
                      {/* row 1 */}
                      <FormGroup>
                        <label>Medical Record ID</label>
                        <Input type="text" id="medicalRecordID"
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
                        <Input type="text" id="medicalProblems"
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
                        <Input type="text" id="prescription"
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
                        <Input type="text" id="medicalTestResults"
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
                          <Input type="text" id="allergies"
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
                        <Input type="text" id="chronicMedication"
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
                        <Input type="text" id="immunisations"
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
                          Hospitalisations
                        </label>
                        <Input type="text" id="hospitalisations"
                          value={hospitalisations}
                          onChange={(event) => {
                            setHospitalisations(event.target.value);
                          }}
                        />
                      </FormGroup>
                      </Col>
                      <Col className="pr-1" md="11">
                      <FormGroup>
                        <label >
                          Folder Number
                        </label>
                        <Input type="text" id="folderNumber"
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
          {/* Right card in Manage Users */}
          <Col md="4"  >
            <Card className="card-user">
              <CardHeader>
                <h5 className="title text-center"  >Search</h5>
                <hr />
              </CardHeader>
              {/* <div className="image"> */}

              <CardBody>
                <form>
                  <InputGroup className="no-border">
                    {/* <Input placeholder="username..." /> */}
                    <Input placeholder="Patient ID..." type="text" id="username"
                      value={searchId}
                      onChange={(event) => {
                        setSearchId(event.target.value);
                        //  setId(event.target.value);
                      }}
                    />
                    {/* <InputGroupAddon addonType="append"> */}
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_zoom-bold" />
                      </InputGroupText>
                    {/* </InputGroupAddon> */}
                  </InputGroup>
                </form>
                {/* </div> */}
                <br />
                <br />
                <br />
                <br />
                <div className="author" >
                  <button type="Update" class="btn btn-danger" onClick={search}>Search</button>
                  <button type="Update" class="btn btn-danger" onClick={save}>Save</button>
                  <button type="button" class="btn btn-danger" onClick={DeleteUser}>Delete</button>
                  <hr />
                </div>
              </CardBody>
            </Card>

 



            
          </Col>
        </Row>
      </div>
    </>
  );
}
// }

export default User;

