import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

export const FreeMakeupStarterKit: React.FC = () => {
  const images = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "makeup-landing-free-kit.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 540) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <section id="makeupStarterKit">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-6 align-self-center text-center text-lg-left">
            <h2 className="h1">Free Makeup Starter Kit</h2>
            <h4 className="text-primary my-3">Available for a limited time only!</h4>
            <p>
              When you enroll in the Master Makeup Artistry Course or the Makeup Artistry Course,
              you’ll receive a gorgeous 5-piece makeup starter kit* to help you launch your professional career!
            </p>
            <p className="lead">Makeup Kit Estimated Value: $150</p>
            <p className="small">* Makeup starter kits available while supplies last</p>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 h-100">
            <Img fluid={images.file.childImageSharp.fluid} alt="free makeup brushes" />
          </div>
        </div>
      </div>
    </section>
  );
};
