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
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

function User() {

  const [username, setId] = useState('');
  const [searchUsername, setSearchId] = useState('');
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cellPhoneNumber, setCellPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [users, setUsers] = useState([]);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    (async () => await Load())();
  }, []);


  async function Load() {
    const result = await axios.get(
      "http://localhost:8080/E-Health-System/User/all");
    setUsers(result.data);
    console.log(result.data);
  }

  async function search(event) {
    event.preventDefault();

    try {
      await axios.get("http://localhost:8080/E-Health-System/User/read/" + searchUsername)
        .then((res) => {
          console.log(res.data);

          setId(res.data.username);
          setName(res.data.name);
          setPassword(res.data.password);
          setCellPhoneNumber(res.data.cellPhoneNumber);
          setEmail(res.data.email);
          setUserType(res.data.userType);
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
      await axios.delete("http://localhost:8080/E-Health-System/User/delete/" + searchUsername)
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
                          <InputGroupAddon addonType="append">
                            <InputGroupText>
                              <div onClick={() => setVisible(!visible)}>
                                {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                              </div>
                            </InputGroupText>
                          </InputGroupAddon>
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
                        <option value="Patient">Patient</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Pharmacist">Pharmacist</option>
                        <option value="Receptionist">Receptionist</option>
                        <option value="Administrator">Administrator</option>
                      </select>
                      {/* </FormGroup> */}
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
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
                    <Input placeholder="username..." type="text" id="username"
                      value={searchUsername}
                      onChange={(event) => {
                        setSearchId(event.target.value);
                        //  setId(event.target.value);
                      }}
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_zoom-bold" />
                      </InputGroupText>
                    </InputGroupAddon>
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

