import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Title from "./Title";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { FaVrCardboard } from "react-icons/fa";
import CardComponent from "./CardComponent";

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

  console.log(testimonials);

  const splitArray = (arr, len) => {
    let chunks = [],
      i = 0,
      n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, (i += len)));
    }
    console.log(chunks, "chunks");
    return chunks;
  };
  console.log(splitArray(testimonials, 2));
  const splitTestimonials = splitArray(testimonials, 2);
  console.log(testimonials);

  return (
    <div>
      {" "}
      <section className="section jobs">
        <Title title="Testimoniale" />
        <div className="job-info">
          {/* job info */}
          <article className="job-info">
            <Carousel interval={50000} variant="dark">
              {splitTestimonials.map((item, index) => {
                return (
                  <Carousel.Item key={index}>
                    <CardComponent testimonials={item} />
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
