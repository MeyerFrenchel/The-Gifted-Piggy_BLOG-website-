import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Card from "react-bootstrap/Card";

const CardComponent = ({ testimonials }) => {
  console.log(testimonials);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
      }}
    >
      {testimonials.map((test, index) => {
        return (
          <Card border="#ededed" style={{ width: "18rem" }}>
            <Card.Header>
              <GatsbyImage
                image={getImage(
                  test.avatar.localFile.childImageSharp.gatsbyImageData
                )}
                alt="First slide"
                className="avatar-pic"
              />
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <h4 style={{ color: "black" }}>{test.client}</h4>
              </Card.Title>
              <Card.Text>{test.quote}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default CardComponent;
