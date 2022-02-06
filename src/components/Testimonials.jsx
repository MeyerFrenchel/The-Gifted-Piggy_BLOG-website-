import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Title from "./Title";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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

  const splitTestimonials = splitArray(testimonials, 3);

  return (
    <section className="section jobs">
      <Title title="Testimoniale" />
      <div className="job-info">
        {/* job info */}
        <article className="job-info">
          <Carousel showDots={true} responsive={responsive}>
            {testimonials.map((test, index) => {
              return (
                <div key={index}>
                  <GatsbyImage
                    image={getImage(
                      test.avatar.localFile.childImageSharp.gatsbyImageData
                    )}
                    alt="First slide"
                    className="avatar-pic"
                  />

                  <div>
                    <h4 style={{ color: "black" }}>{test.client}</h4>
                  </div>
                  <div>{test.quote}</div>
                </div>
              );
            })}
          </Carousel>
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  );
};

export default Testimonials;
