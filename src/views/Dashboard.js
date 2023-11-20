import React from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function Dashboard() {
  return (
    <>

<PanelHeader
        content={
          <div className="header text-center">
            <h2 className="title">Welcome to E-Health</h2>
            <p className="category">
              Extra Text{" "}
            </p>
          </div>
        }
      />
      <div className="content">
        <Row>
          <Col xs={12} md={4}>
            {/* Shipped products chart  */}
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Heading 1</h5>
                <CardTitle tag="h4">Big Heading 1</CardTitle>
              </CardHeader>
              <CardBody>
              {/* insert into body  */}
              </CardBody>
              <CardFooter>
              {/* insert into footer  */}
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Heading 2</h5>
                <CardTitle tag="h4">Big Heading 2</CardTitle>
              </CardHeader>
              <CardBody>
                {/* insert into body  */}
              </CardBody>
              <CardFooter>
                {/* insert into footer  */}
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Heading 3</h5>
                <CardTitle tag="h4">Big Heading 3</CardTitle>
              </CardHeader>
              <CardBody>
                {/* insert into body  */}
              </CardBody>
              <CardFooter>
                {/* insert into footer  */}
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Card className="card-tasks">
              <CardHeader>
                <h5 className="card-category">Lower Card 1</h5>
                <CardTitle tag="h4">Big Heading 4</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                        <FormGroup check>
                            <Label check>
                              <span className="now-ui-icons arrows-1_minimal-right" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                          Sample text 1
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip9232172060"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_chat-round" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip9232172060"
                          >
                            Popup text 1
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <span className="now-ui-icons arrows-1_minimal-right" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                          Sample Text 2
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip9075093470"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_chat-round" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip9075093470"
                          >
                            Popup Text 2
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <span className="now-ui-icons arrows-1_minimal-right" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                        Sample Text 3
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip3262476520"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_chat-round" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip3262476520"
                          >
                            Popup Text 3
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <hr />
                </div>
              </CardBody>
              <CardFooter>
                {/* insert footer  */}
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="card-tasks">
              <CardHeader>
                <h5 className="card-category">Lower Card 2</h5>
                <CardTitle tag="h4">Big Heading 5</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                        <FormGroup check>
                            <Label check>
                              <span className="now-ui-icons arrows-1_minimal-right" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                          Sample text 4
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip923217206"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_chat-round" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip923217206"
                          >
                            Popup text 4
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <span className="now-ui-icons arrows-1_minimal-right" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                          Sample Text 5
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip907509347"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_chat-round" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip907509347"
                          >
                            Popup Text 5
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <span className="now-ui-icons arrows-1_minimal-right" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                        Sample Text 6
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip326247652"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_chat-round" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip326247652"
                          >
                            Popup Text 6
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <hr />
                </div>
              </CardBody>
              <CardFooter>
                {/* insert footer  */}
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
