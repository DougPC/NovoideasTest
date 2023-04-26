import React, { useState, useEffect } from "react";
import axios from "axios";
import Message from "./Message";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBIcon,
  MDBTextArea,
} from "mdb-react-ui-kit";

const Content2 = () => {
  const [chatData, setChatData] = useState([]);

  /*useEffect(()=>{

  axios({
    method:'get', 
    url: 'https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing?user=admin&password=admin',
    
  })
    .then(function (response) {
     setChatData(response.data)
    
    });

})*/

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url: "https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing?user=admin&password=admin",
        });

        setChatData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <MDBContainer className="py-5">
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="8" lg="6" xl="4">
            <MDBCard id="chat1" style={{ borderRadius: "15px" }}>
              <MDBCardHeader
                className="d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
                style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              >
                <MDBIcon fas icon="angle-left" />
                <p className="mb-0 fw-bold">Live chat</p>
                <MDBIcon fas icon="times" />
              </MDBCardHeader>

              <MDBCardBody>
                {chatData.map((message, index) => (
                  <Message key={index} message={message} />
                ))}

                              

                <MDBTextArea
                  className="form-outline"
                  label="Type your message"
                  id="textAreaExample"
                  rows={4}
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Content2;
