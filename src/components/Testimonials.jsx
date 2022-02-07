import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Title from "./Title";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  console.log(testimonials);

  return (
    <section className="section jobs">
      <Title title="Testimoniale" />

      <article className="job-info">
        <Carousel showDots={true} responsive={responsive}>
          {testimonials.map((test, index) => {
            return (
              <div className="card" key={index}>
                <GatsbyImage
                  image={getImage(
                    test.avatar.localFile.childImageSharp.gatsbyImageData
                  )}
                  alt="First slide"
                  className="avatar-pic"
                />

                <div className="card-name">
                  <h4 style={{ color: "black" }}>{test.client}</h4>
                </div>
                <div className="card-description">{test.quote}</div>
              </div>
            );
          })}
        </Carousel>
      </article>

      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  );
};

export default Testimonials;
