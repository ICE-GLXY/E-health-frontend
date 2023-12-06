import React from "react";
// react plugin used to create charts

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function Disclaimer() {
    return (
        <>

            <PanelHeader size="sm"
                content={
                    <div className="header text-center">
                        {/* <h2 className="title">E-Health Managament System</h2> */}
                        <p className="category">
                            {/* Extra Text{" "} */}
                        </p>
                    </div>
                }
            />

            <div className="content" >
                <Row>
                    <Col xs={12} md={12}>
                        {/* Shipped products chart  */}
                        <Card className="card-chart">
                            <CardHeader>
                                <h5 className="card-category">Experimental Phase and Security Notice</h5>
                                <CardTitle tag="h4">Disclaimer</CardTitle>
                            </CardHeader>
                            <CardBody>
                            <h6>Introduction:</h6>
                            Welcome to E-Health Management System website and mobile application. The Platform is currently in its experimental phase, and we appreciate your participation and use. However, it's crucial to understand the conditions and limitations associated with the current state of the Platform.
                            <h6>Experimental Nature::</h6>
                            •	The Platform is in the experimental phase, and ongoing adjustments, improvements, and modifications are likely to occur without notice. <br/>
                            •	Users are encouraged to provide feedback regarding their experience, but we cannot guarantee the immediate implementation of suggested changes.

                            <h6>Security Notice::</h6>
                            •	The Platform currently lacks advanced security measures. As a result, the confidentiality and security of medical information and user data cannot be guaranteed.<br/>
                            •	Users acknowledge and accept the risks associated with the absence of security features, including potential unauthorized access, data breaches, or other security vulnerabilities.

                            <h6>Medical Information::</h6>
                            •	The Platform contains medical information pertaining to various patients. However, users should be aware that the information presented may not be complete, accurate, or up-to-date.<br/>
                            •	The Platform is not a substitute for professional medical advice, diagnosis, or treatment. Users should consult with qualified healthcare professionals for specific medical concerns.<br/>
                            •	THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE PLATFORM IS SOLELY AT YOUR OWN RISK

                            <h6>Account Creation:</h6>
                            •	Users are responsible for the accuracy and completeness of the information provided during the account creation process.<br/>
                            •	Each user is required to safeguard their login credentials and report any unauthorized access to their account immediately.

                            <h6>User Responsibilities:</h6>
                            •	Users are expected to use the Platform responsibly and ethically.<br/>
                            •	Users should not rely solely on the Platform for critical medical decisions and should consult with qualified healthcare professionals for personalized advice.

                            <h6>Limitation of Liability:</h6>
                            In no event shall E-Health Management System and the Developers of the system, Mogamad Taariq Phillips and Zaeem Petersen, be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of the Platform.
                            <h6>Changes to Disclaimer:</h6>
                            E-Health Management System and the Developers of the system, Mogamad Taariq Phillips and Zaeem Petersen, reserves the right to modify, update, or otherwise change this disclaimer at any time. Users are encouraged to review this disclaimer periodically for changes.
                            <h6>Contact Information:</h6>
                            If you have any questions or concerns regarding this disclaimer, please contact us at 220166153@mycput.ac.za and 219010145@mycput.ac.za .
                            
                            </CardBody>
                            <CardFooter>
                            <h6>Last Updated: 2023/12/06</h6>
                            
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Disclaimer;