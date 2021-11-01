import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div>
      <Container>
        <h1 className="text-center">About Us</h1>
        <div className="row">
          <div className="col-md-6 pt-5">
            <h2>What're Our Clients Say</h2>
            <p>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
            <p>Top Tour Operators and Travel Agency. We offering in total 793 tours and holidays throughout the world. Combined we have received 1532 customer reviews and an average rating of 5 out of 5 stars.</p>
            Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.
          </div>
          <div className="col-md-6">
            <div>
              <img className="img-fluid" src="https://i.ibb.co/YXnHhys/main-slider1.jpg" alt="" />
            </div>
          </div>
        </div>
      </Container>

    </div>
  );
};

export default About;
