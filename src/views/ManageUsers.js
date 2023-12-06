import React from "react";
import QRCode from 'qrcode';
import {Grid} from '@material-ui/core';
import QrReader from 'modern-react-qr-reader';
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
import { useEffect, useState, useRef} from "react";



function User() {

  // QR 
  const qrRef = useRef();
  const [ResultFile, setResultFile] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [scanResultWebCam, setScanResultWebCam] =  useState('');
  const generateQrCode = async () => {
    try {
          const response = await QRCode.toDataURL(patients);
          setImageUrl(response);
    }catch (error) {
      console.log(error);
    }
  }
  const openDialog = () => {
    qrRef.current.openImageDialog();
  }
  const handleErrorFile = (error) => {
    console.log(error);
  }
  const fileScan = (result) => {
    if (result) {
        setResultFile(result);
    }
}
const handleErrorWebCam = (error) => {
  console.log(error);
}
const handleScanWebCam = (result) => {
  if (result){
    setResultFile(result);
  }
 }

  // User const

  const [username, setId] = useState('');
  const [name, setName] = useState("");
  const [surname, setSName] = useState("");
  const [password, setPassword] = useState("");
  const [cellPhoneNumber, setCellPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [users, setUsers] = useState([]);
  const [searchId, setSearchId] = useState('');

  const [visible, setVisible] = useState(false);


  //Patient const
    const [patientID, setPId] = useState('');
    const[idNumber, setIDnum] = useState("");
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


    const [cardVisible, setCardVisible] = useState(false);

    // const handleUserTypeChange = (e) => {
    //   const selectedType = e.target.value;
    //   setUserType(selectedType);
  
    //   // Set the visibility of the card based on the selected user type
    //   setCardVisible(selectedType === 'patient');
    // };

    
  useEffect(() => {
    (async () => await Load())();
  }, []);

function showPatient(){
  if (userType.trim() === 'patient') {
    setCardVisible(true)
    return;
  }
  else 
  setCardVisible(false)
return;

}


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
          setSName(res.data.user.surname);
          setPassword(res.data.user.password);
          setCellPhoneNumber(res.data.user.cellPhoneNumber);
          setEmail(res.data.user.email);
          setUserType(res.data.user.userType);
          


          // setUserType(res.data.userType);


          setPId(res.data.patientID);
          setIDnum(res.data.idNumber);
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
          
          
          setPatients(res.data.patientID);
        });
    }
    catch (err) {
      alert("User search Failed");
    }
  }

  async function searchQR(event) {
    event.preventDefault();

    try {
      await axios.get("http://localhost:8080/E-Health-System/patient/read/" + ResultFile)
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

          setPatients(res.data.patientID);
          
        });
    }
    catch (err) {
      alert("User search Failed");
    }
  }

  async function save(event) {
    event.preventDefault();

    //validations
    if (username.trim() === '') {
      alert('Username cannot be blank');
      return;
    }

    if (name.trim() === '') {
      alert('Name cannot be blank');
      return;
    }

    if (surname.trim() === '') {
      alert('Surname cannot be blank');
      return;
    }

    if (password.trim() === '') {
      alert('Password cannot be blank');
      return;
    }

    if (cellPhoneNumber.trim() === '') {
      alert('Cellphone Number cannot be blank');
      return;
    }

    if (email.trim() === '') {
      alert('Email cannot be blank');
      return;
    }

    if (userType.trim() === '') {
      alert('User Type cannot be blank');
      return;
    }

    if (patientID.trim() === '') {
      alert('patientID cannot be blank');
      return;
    }

    if (idNumber.trim() === '') {
      alert('ID Number cannot be blank');
      return;
    }

    if (age.trim() === '') {
      alert('Age cannot be blank');
      return;
    }

    if (streetNumber.trim() === '') {
      alert('Street Number cannot be blank');
      return;
    }

    if (streetName.trim() === '') {
      alert('Street Name cannot be blank');
      return;
    }

    if (city.trim() === '') {
      alert('City cannot be blank');
      return;
    }

    if (province.trim() === '') {
      alert('Province cannot be blank');
      return;
    }

    if (medicalRecordID.trim() === '') {
      alert('Medical Record ID cannot be blank');
      return;
    }

    if (medicalTestResults.trim() === '') {
      alert('Medical Test Results cannot be blank');
      return;
    }

    if (folderNumber.trim() === '') {
      alert('Folder Number cannot be blank');
      return;
    }

    if (chronicMedication.trim() === '') {
      alert('Chronic Medication cannot be blank');
      return;
    }

    if (hospitalisations.trim() === '') {
      alert('Hospitalisations cannot be blank');
      return;
    }

    if (allergies.trim() === '') {
      alert('Allergies cannot be blank');
      return;
    }

    if (medicalProblems.trim() === '') {
      alert('Medical Problems cannot be blank');
      return;
    }

    if (immunisations.trim() === '') {
      alert('Immunisations cannot be blank');
      return;
    }

    if (prescription.trim() === '') {
      alert('Prescription cannot be blank');
      return;
    }


    try {
      
      await axios.post("http://localhost:8080/E-Health-System/patient/save",
        {
          user:{
            username: username,
            name: name,
            surname, surname,
            password: password,
            cellPhoneNumber: cellPhoneNumber,
            email: email,
            userType: userType
          },

            patientID:patientID,
            idNumber:idNumber,
            age: age,
            weight: weight,
            height: height,
            streetNumber: streetNumber,
            streetName: streetName,
            city: city,
            province: province,

            patientMedicalInformation:{
            medicalRecordID:medicalRecordID,
            medicalTestResults: medicalTestResults,
            folderNumber: folderNumber,
            chronicMedication: chronicMedication,
            hospitalisations: hospitalisations,
            allergies: allergies,
            medicalProblems: medicalProblems,
            immunisations: immunisations,
            prescription: prescription,
            },
          
        });
            alert("User Saved Successfully");
            setId("");
            setName("");
            setSName("");
            setPassword("");
            setCellPhoneNumber("");
            setEmail("");
            setUserType("");

            setPId("");
            setIDnum("")
            setUser("");
            setAge("");
            setWeight("");
            setHeight("");
            setStreetNumber("");
            setStreetName("");
            setCity("");
            setProvince("");
            setPatientMedicalInformation("");

            setMId("");
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
    catch (err) {
      alert("User Saving Failed");
    }
  }

  async function ClearPatient(event){
    event.preventDefault();
try{

  alert("All fields have been cleared");
  
  setSearchId("")

  setId("");
  setName("");
  setSName("");
  setPassword("");
  setCellPhoneNumber("");
  setEmail("");
  setUserType("");

  setPId("");
  setIDnum("")
  setUser("");
  setAge("");
  setWeight("");
  setHeight("");
  setStreetNumber("");
  setStreetName("");
  setCity("");
  setProvince("");
  setPatientMedicalInformation("");

  setMId("");
  setMedicalProblems("");
  setPrescription("");
  setMedicalTestResults("");
  setAllergies("");
  setChronicMedication("");
  setImmunisations("");
  setHospitalisations("");
  setFolderNumber("");

  setImageUrl(null);
  setResultFile(null);
}
catch{
  alert("Clear failed");

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
  // async function DeletePatient(event) {
  //   // event.preventDefault();
  //   try {
  //     alert("User deleted");
  //     await axios.delete("http://localhost:8080/E-Health-System/patient/delete/" + patientId)
  //       .then((res) => {
  //         console.log(res.data);
  //         setId("");
  //         setName("");
  //         setSName("");
  //         setPassword("");
  //         setCellPhoneNumber("");
  //         setEmail("");
  //         setUserType("");

  //         setPId("");
  //         setIDnum("")
  //         setUser("");
  //         setAge("");
  //         setWeight("");
  //         setHeight("");
  //         setStreetNumber("");
  //         setStreetName("");
  //         setCity("");
  //         setProvince("");
  //         setPatientMedicalInformation("");

  //         setMId("");
  //         setMedicalProblems("");
  //         setPrescription("");
  //         setMedicalTestResults("");
  //         setAllergies("");
  //         setChronicMedication("");
  //         setImmunisations("");
  //         setHospitalisations("");
  //         setFolderNumber("");

  //         Load();
  //       });
  //   }
  //   catch (err) {
  //     alert("User delete Failed");
  //   }



  //   }
  
  
   



  return (
    <>
      <PanelHeader  size="sm" />
      <div className="content" >
        <Row>
          <Col md="8">
            <Card style={{color: 'Black' }}>
              <CardHeader>
                <h5 className="title text-center">Create or Edit a User</h5>
                <hr />
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="11">
                      {/* row 1 */}
                      <FormGroup >
                        <label style={{ color: 'Black', fontSize: '16px'}}>Username</label>
                        <Input  style={{ color: 'Black', fontSize: '16px' , backgroundColor: 'white'}} type="text" id="username" required maxlength = "7" 

                          value={username}
                          onChange={(event) => {
                            setId(event.target.value);
                            setUser(event.target.value);
                            
                          }}
                        />
                      </FormGroup>
                      <Row>
                    <Col className="pr-1" md="11">
                 
                    </Col>
                  </Row>
                    </Col>
                    <Col className="pr-1" md="11">
                      <FormGroup>
                        {/* row 2 col 1 */}
                        <label style={{ color: 'Black'}}>Name</label>
                        <Input type="text" id="name"

                          value={name}
                          onChange={(event) => {
                            setCellPhoneNumber(event.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="11">
                      <FormGroup>
                        {/* row 2 col 1 */}
                        <label style={{ color: 'Black'}}>Surname</label>
                        <Input type="text" id="surname"
                          value={surname}
                          onChange={(event) => {
                            setSName(event.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                    
                    <Col className="pr-1" md="11">
                      <FormGroup>
                        {/* row 2 col 1 */}
                        <label style={{ color: 'Black'}}>Phone Number</label>
                        <Input type="text" id="cellPhoneNumber"  maxlength = "10"

                          value={cellPhoneNumber}
                          onChange={(event) => {
                            setCellPhoneNumber(event.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="11">
                      <FormGroup>
                        <label style={{ color: 'Black'}} htmlFor="exampleInputEmail1"> 
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
                        <label style={{ color: 'Black'}}>Password</label>
                        <InputGroup >
                        <Input type={visible ? "text" : "password"} id="password" maxlength = "25"
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
                      <label  style={{ color: 'Black'}}>User Type</label>
                      {/* <Input type="text" id="userType"  */}
                      <select className="custom-select"
                        value={userType}
                        
                     

                        onChange={(e) => {
                          
                          const selectedType = e.target.value;
                          setUserType(selectedType);
                          setCardVisible(selectedType === 'patient');

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

             {cardVisible && (

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
                        <Input type="text" id="patientID" maxlength = "5"
                          value={patientID}
                          onChange={(event) => {
                            setPId(event.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="11">
                      {/* row 1 */}
                      <FormGroup>
                        <label>ID Number</label>
                        <Input type="text" id="idNumber" maxlength = "13"
                          value={idNumber}
                          onChange={(event) => {
                            setIDnum(event.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="11">
                      <FormGroup>
                        {/* row 2 col 1 */}
                        <label>Username</label>
                        <Input type="text" id="user"
                          value={user}
                          onChange={(event) => {
                            setUser(event.target.value);
                            setId(event.target.value);

                          }} 
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="11">
                      <FormGroup>
                        <label >
                          Age
                        </label>
                        <Input type="text" id="age" maxlength = "3"
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
                        <Input type="text" id="weight" maxlength = "5"
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
                        <Input type="text" id="height" maxlength = "10"
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
                        <Input type="text" id="streetNumber" maxlength = "15"
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
                        <Input type="text" id="streetName" maxlength = "30"
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
                        <Input type="text" id="city" maxlength = "30"
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
                        <Input type="text" id="province" maxlength = "30"
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
                        Medical Record ID
                        </label>
                        <Input type="text" id="patientMedicalInformation" maxlength = "7"
                          value={patientMedicalInformation}
                          onChange={(event) => {
                            setPatientMedicalInformation(event.target.value);
                            setMId(event.target.value);

                          }}
                        />
                      </FormGroup>
                      </Col>
                </Form>
              </CardBody>
            </Card>
              </div>
             )}

          {/* patientMedicalInformation */}
          {cardVisible && (
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
                        <Input type="text" id="medicalRecordID" maxlength = "7"
                          value={medicalRecordID}
                          onChange={(event) => {
                            setMId(event.target.value);
                            setPatientMedicalInformation(event.target.value);

                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="11">
                      <FormGroup>
                        {/* row 2 col 1 */}
                        <label>Medical Problems</label>
                        <Input type="text" id="medicalProblems" maxlength = "255"
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
                        <Input type="text" id="prescription" maxlength = "255"
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
                        <Input type="text" id="medicalTestResults" maxlength = "100"
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
                        <Input type="text" id="allergies" maxlength = "75"
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
                        <Input type="text" id="chronicMedication" maxlength = "75"
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
                        <Input type="text" id="immunisations" maxlength = "75"
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
                        <Input type="text" id="hospitalisations" maxlength = "75"
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
                        <Input type="text" id="folderNumber" maxlength = "5"
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
)}

          </Col>
          {/* Right card in Manage Users */}
          <Col md="4"  >
            <Card className="card-user">
              <CardHeader>
                <h5 className="title text-center"  >Find a User</h5>
                <hr />
              </CardHeader>
              {/* <div className="image"> */}

              <CardBody>
                <form>
                  <InputGroup className="no-border">
                    {/* <Input placeholder="username..." /> */}
                    <Input placeholder="Patient ID..." type="text" id="Searchusername"
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
                  <button type="Update" class="btn btn-danger" onMouseLeave={showPatient} onClick={search}>Search</button>
                  <button type="button" class="btn btn-danger" onMouseLeave={showPatient} onClick={ClearPatient}>Clear All</button>

                  <hr />
                  <button type="Update" class="btn btn-danger" onClick={save}> Save </button>
                  <button type="button" class="btn btn-danger" onClick={() => DeletePatient(searchId)}>Delete</button>

                </div>
              </CardBody>
            </Card>
            
            <Card className="card-user">
              <CardHeader>
                <h5 className="title text-center"  >QR Search</h5>
                <hr />
              </CardHeader>
              {/* <div className="image"> */}

              <CardBody>
                {/* </div> */}
                <br />
                <br />
                <br />
                <br />
                <div className="author" >
                  <button class="btn btn-danger" variant="contained" 
                            color="primary" onClick={() => generateQrCode()}>Generate</button>
                            <br/>
                            {imageUrl ? (
                              <a href={imageUrl} download>
                                  <img src={imageUrl} alt="img"/>
                              </a>) : null}
                  <hr />
              <button class="btn btn-danger" variant="contained" color="primary" onClick={openDialog}>Upload QR Code</button>
              <button type="Update" class="btn btn-danger" onMouseLeave={showPatient} onClick={searchQR}>search QR ID</button>
              <h6>QR ID:  {ResultFile}</h6>
              </div>
              <div>
                        <QrReader
                          ref={qrRef}
                          delay={100}
                          style={{alignItems: "center",width: "30%"}}
                          onError={handleErrorFile}
                          onScan={fileScan}
                          legacyMode={true}
                        />
                          <QrReader
                         delay={100}
                         style={{alignItems: "center", width: '30%'}}
                         onError={handleErrorWebCam}
                         onScan={handleScanWebCam}
                         />
                        </div>
                        <hr />      
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

