import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Title from "./Title";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { FaVrCardboard } from "react-icons/fa";

export const query = graphql`
  {
    allStrapiTestimonial(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        client
        quote
        avatar {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

const Testimonials = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiTestimonial: { nodes: testimonials },
  } = data;
  const [value, setValue] = useState(0);
  const { client, avatar, quote } = testimonials[value];
  const image = getImage(avatar.localFile.childImageSharp.gatsbyImageData);
  console.log(avatar.localFile.childImageSharp);
  const handleSelect = (selectedIndex, e) => {
    setValue(selectedIndex);
  };

  return (
    <div>
      {" "}
      <section className="section jobs">
        <Title title="Testimoniale" />
        <div className="job-info">
          {/* job info */}
          <article className="job-info">
            <Carousel
              interval={50000}
              variant="dark"
              activeIndex={value}
              onSelect={handleSelect}
            >
              {testimonials.map((item, index) => {
                return (
                  <Carousel.Item key={index}>
                    <Card border="success" style={{ width: "18rem" }}>
                      <Card.Header>
                        <GatsbyImage
                          image={getImage(
                            item.avatar.localFile.childImageSharp
                              .gatsbyImageData
                          )}
                          alt="First slide"
                          className="avatar-pic"
                        />
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>
                          <h4 style={{ color: "black" }}>{item.client}</h4>
                        </Card.Title>
                        <Card.Text>
                          <p>{item.quote}</p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </article>
        </div>
        <Link to="/about" className="btn center-btn">
          more info
        </Link>
      </section>
    </div>
  );
};

export default Testimonials;
