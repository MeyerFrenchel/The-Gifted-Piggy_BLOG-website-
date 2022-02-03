import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const TestSlider = ({ testimonials, image }) => {
  return (
    <div>
      <Carousel variant="dark">
        {testimonials.map((item, index) => {
          return (
            <Carousel.Item>
              <GatsbyImage
                className="d-block w-100"
                image={image}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>{item.client}</h5>
                <p>{item.quote}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TestSlider;
