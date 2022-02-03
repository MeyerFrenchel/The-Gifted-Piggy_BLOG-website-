import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import { Link } from "gatsby";

const Product = ({ nume, descriere, hash_key, image, index, slug, price }) => {
  const productImage = getImage(
    image.localFile.childImageSharp.gatsbyImageData
  );
  return (
    <article className="project">
      <GatsbyImage image={productImage} className="project-img" alt={nume} />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <Link to={`/projects/${slug}`} className="project-slug">
          <h3>{nume}</h3>
        </Link>
        <span>{price} lei</span>
        <p className="project-desc">{descriere}</p>
        <div className="project-stack">
          {hash_key.map(item => {
            return <span key={item.id}>#{item.name}</span>;
          })}
        </div>
        <div className="project-links">
          <a href="">
            <FaGithubSquare className="project-icon"></FaGithubSquare>
          </a>
          <a href="">
            <FaShareSquare className="project-icon"></FaShareSquare>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Product;
