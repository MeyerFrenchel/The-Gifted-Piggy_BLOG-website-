import React from "react";
import Title from "./Title";
import Product from "./Product";
import { Link } from "gatsby";
const Projects = ({ products, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {products.map((product, index) => {
          return <Product key={product.id} index={index} {...product} />;
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  );
};

export default Projects;
