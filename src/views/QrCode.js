import React from "react";
import {Container, CardContent, makeStyles, Grid, TextField, Button} from '@material-ui/core';
import QRCode from 'qrcode';
import QrReader from 'modern-react-qr-reader';
// reactstrap components
import {
//   Button,
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
import { useEffect, useState, useRef} from "react";

function QrCode() {

    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [ResultFile, setResultFile] = useState('');
    const [scanResultWebCam, setScanResultWebCam] =  useState('');
    const classes = useStyles();
    const qrRef = useRef();
  
  
    const generateQrCode = async () => {
      try {
            const response = await QRCode.toDataURL(text);
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
          setScanResultWebCam(result);
      }
     }


  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title text-center">User Creation</h5>
                <hr />
              </CardHeader>
              <CardBody>


              {/* <Grid item xl={4} lg={4} md={6} sm={12} xs={12}> */}
                          <TextField label="Enter Text Here" onChange={(e) => setText(e.target.value)}/>
                          <Button className={classes.btn} variant="contained" 
                            color="primary" onClick={() => generateQrCode()}>Generate</Button>
                            <br/>
                            <br/>
                            <br/>
                            {imageUrl ? (
                              <a href={imageUrl} download>
                                  <img src={imageUrl} alt="img"/>
                              </a>) : null}
                      {/* </Grid> */}


              </CardBody>
            </Card>
          </Col>
          {/* Right card in Manage Users */}
          <Col md="12"  >
            <Card className="card-user">
              <CardHeader>
                <h5 className="title text-center"  >Search</h5>
                <hr />
              </CardHeader>
              <div className="image"/>

              <CardBody>

              <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <Button className={classes.btn} variant="contained" color="secondary" onClick={openDialog}>Upload Qr Code</Button>
                        <QrReader
                          ref={qrRef}
                          delay={100}
                          style={{width: '60%'}}
                          onError={handleErrorFile}
                          onScan={fileScan}
                          legacyMode={true}
                        />
                         {/* <label for="qrCodeFile">File to upload</label>
                         <input type="file" class="form-control-file" id="qrCodeFile" name="qrCodeFile" />
                         <button type="submit" class="btn btn-primary" onClick={onScanFile}>Upload</button> */}
                         <h3>Scanned Code: {ResultFile}</h3>

                      </Grid>


                                                    <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                         <h3>Qr Code Scan by Web Cam</h3>
                         <QrReader
                         delay={300}
                         style={{width: '100%'}}
                         onError={handleErrorWebCam}
                         onScan={handleScanWebCam}
                         />
                         <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
                      </Grid>



              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
  
}
const useStyles = makeStyles((theme) => ({
    conatiner: {
      marginTop: 10
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      alignItems:  'center',
      background: '#3f51b5',
      color: '#fff',
      padding: 20
    },
    btn : {
      marginTop: 10,
      marginBottom: 20
    }
}));

export default QrCode;