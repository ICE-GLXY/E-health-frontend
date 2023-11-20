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
// const ComboBoxComponent = () => {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };
function User() {
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
                        <Input
                          defaultValue=""
                          // disabled
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    
                    
                    <Col className="pr-1" md="9">
                      <FormGroup>
                        {/* row 2 col 1 */}
                        <label>Cell Phone number</label>
                        <Input
                          defaultValue=""
                          placeholder="Cell"
                          type="text"
                        />
                      </FormGroup>
                    </Col>

                    <Col className="pr-1" md="9">
                      <FormGroup>
                        
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input placeholder="Email"
                         type="email"
                        />
                      </FormGroup>
                    </Col>
                  
                  </Row>
                  <Row>
                  
                    <Col className="pr-1" md="9">
                      <FormGroup>
                        {/* row 2 col 1 */}
                        <label>Name and Surname</label>
                        <Input
                          defaultValue=""
                          placeholder="Name and Surname"
                          type="text"
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
                        <Input
                          defaultValue=""
                          placeholder="Password"
                          type="password"
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
                        <Input
                          defaultValue=""
                          placeholder="User Type"
                          type="text"
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
                <button type="Update" class="btn btn-danger" onClick={() => DeleteUser(User.username)}>Update</button>
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

