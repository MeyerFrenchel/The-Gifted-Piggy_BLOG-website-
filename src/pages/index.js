import * as React from "react";

import { graphql } from "gatsby";
// import Hero from "../components/Hero";
// import Services from "../components/Services";
// import Jobs from "../components/Jobs";
import Products from "../components/Products";
// import Seo from "../components/Seo";

// styles
import "../assets/css/main.css";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Projects from "../components/Products";
import TestSlider from "../components/TestSlider";

const IndexPage = ({ data }) => {
  const {
    allStrapiProdus: { nodes: products },
  } = data;
  return (
    <Layout>
      <main>
        <Hero />
        <Testimonials />
        <Products title={"Produse Populare"} products={products} />
        <h1>Gatsby Strapi Portfolio Starter</h1>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiProdus(filter: { featured: { eq: true } }) {
      nodes {
        id
        descriere
        nume
        price
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 100, placeholder: BLURRED)
            }
          }
        }
        hash_key {
          id
          name
        }
      }
    }
  }
`;

export default IndexPage;
