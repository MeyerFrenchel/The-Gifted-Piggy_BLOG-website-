import React from "react";
import { Link } from "gatsby";
import socialLinks from "../constants/social_links";
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="store-name">The Gifted Piggy</div>
            <div className="underline"></div>
            <h1 className="title-quote">
              “Yesterday is history, tomorrow is a mystery , but today is a
              gift, which is why we call it the present.”
            </h1>
            <h4>
              Cadouri artizanale, personalizate si facute cu dragoste pentru cei
              dragi!
            </h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </article>
        <StaticImage
          src="../assets/images/piggy-01.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
        {/* <img src={heroImg} alt="portfolio" className="hero-img-svg" /> */}
      </section>
    </header>
  );
};

export default Hero;
