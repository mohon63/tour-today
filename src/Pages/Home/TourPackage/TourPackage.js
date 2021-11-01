import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TourPackage = () => {

  const [packages, setPakages] = useState([])

  useEffect(() => {
    fetch('https://serene-crag-02105.herokuapp.com/card')
      .then(res => res.json())
      .then(data => setPakages(data))
  }, [])


  return (
    <>
      {
        (packages.length !== 0) ? <div className="my-5">
          <div style={{ padding: "0 320px" }} className=" text-center">
            <h1>Top Destinations</h1>
            <p>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
          </div>
          <div className="tour-card">
            <Container>
              <Row xs={1} md={3} className="g-4">
                {
                  packages.map(pack => <Col>
                    <Card>
                      <Card.Img
                        style={{ height: '350px' }}
                        variant="top"
                        src={pack.img}
                      />
                      <Card.Body>
                        <Card.Title>{pack.name}</Card.Title>
                        <Card.Text>{pack.des}</Card.Text>
                        <Card.Text style={{ fontWeight: 'bold' }}>$ {pack.fee}</Card.Text>
                      </Card.Body>
                      <Link to={`/selected/${pack._id}`}><button className="btn mx-1 bg-primary text-white mb-2">
                        Book Now
                      </button></Link>
                    </Card>
                  </Col>)
                }
              </Row>
            </Container>
          </div>
        </div> : <h1>Loading...</h1>
      }
    </>

  );
};

export default TourPackage;
