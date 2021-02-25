import React from "react";
import { Container } from "reactstrap";
const Footer=()=>
{
    return(
        <div>
             <Container
      fluid
      tag="footer"
      className="text-center bg-info text-white text-uppercase fixed-bottom p-3"
    >
      Github search App with Firebase Athentication
    </Container>
        </div>
    ) 
}
export default Footer;