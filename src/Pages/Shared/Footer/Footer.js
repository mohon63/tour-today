import React from "react";
import { Container} from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div style={{height:'50vh'}} className="pt-5 mt-5 bg-dark text-light">
      <Container>
        <h1>This is footer</h1>
      </Container>
    </div>
  );
};

export default Footer;
