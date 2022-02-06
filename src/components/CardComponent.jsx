import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
          <div style={{ width: "18rem" }}>
            <div>
              <GatsbyImage
                image={getImage(
                  test.avatar.localFile.childImageSharp.gatsbyImageData
                )}
                alt="First slide"
                className="avatar-pic"
              />
            </div>
            <div>
              <div>
                <h4 style={{ color: "black" }}>{test.client}</h4>
              </div>
              <div>{test.quote}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardComponent;
