import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src="https://i.ibb.co/QmWqstw/benjamin-lecomte-4-RLGfu-Rc-MI4-unsplash.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="container">
              <div className="banner-content ">
                <span className="sub-title">Amazing Places</span>
                <h1>
                  Make Your Trip Fun &amp; Noted
                </h1>
                <p>
                  Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.
                </p>
                <div className="button-three">Destinations</div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src="https://i.ibb.co/ThjgT27/patricia-jekki-k4-sxnhj1c0-unsplash.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="container">
              <div className="banner-content">
                <span className="sub-title">Amazing Places</span>
                <h1>
                  Make Your Trip Fun &amp; Noted
                </h1>
                <p>
                  Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.
                </p>
                <div className="button-three">Destinations</div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src="https://i.ibb.co/86yvTVK/g-r-mottez-WITq-FX-l-Jhs-unsplash.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="container">
              <div className="banner-content">
                <span className="sub-title">Amazing Places</span>
                <h1>
                  Make Your Trip Fun &amp; Noted
                </h1>
                <p>
                  Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.
                </p>
                <div className="button-three">Destinations</div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
