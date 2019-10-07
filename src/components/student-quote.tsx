import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

type quoteKey = 'queenella' | 'chantal';

type Quotes = {
  [key in quoteKey]: {
    name: string;
    title: string;
    text: string;
  };
};

const quotes: Quotes = {
  queenella: {
    name: 'Queenella Gibson',
    title: 'QC Makeup Academy Graduate',
    text: `Prior to taking courses at QC, I didn’t do well with makeup applications. I knew nothing about different ` +
      `skin types, eye shapes, skin tones, etc. Nathan Johnson (my mentor) equipped me with all the tools that I` +
      `needed to pursue my career in makeup. Since my completion of the course, I’ve serviced over 200 clients in ` +
      `freelancing (all within 1 year!), and have joined Sephora as a Color Consultant.`,
  },
  chantal: {
    name: 'Chantal Lofstrom',
    title: 'QC Makeup Academy Graduate',
    text: `I love how the course encourages you to have different models for projects, as this was a great way to ` +
     `work and gain experience with different people and different types of skin! QC really taught me that not ` +
     `every makeup look needs to be full-blown glam to look beautiful… sometimes less IS more!`,
  },
};

interface Props {
  quote: keyof Quotes;
}

export const StudentQuote: React.FC<Props> = ({ quote }) => {
  const images = useStaticQuery(graphql`
    query {
      queenella: file(relativePath: { eq: "Queen-300x300.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      chantal: file(relativePath: { eq: "chantal-lofstrom.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <section className="bg-black text-light">
      <div className="container text-center">
        <h5 className="display-3" style={{ marginBottom: '-1.5rem' }}>”</h5>
        <p className="lead serif">{quotes[quote].text}</p>
        <div className="serif">
          <Img
            fluid={images[quote].childImageSharp.fluid}
            alt={quotes[quote].name}
            style={{ width: 50, height: 50, borderRadius: 25, display: 'inline-block', verticalAlign: 'middle' }}
          />
          <div style={{ marginLeft: 15, display: 'inline-block', verticalAlign: 'middle' }}>
            <span>{quotes[quote].name}</span>
            <br />
            <span className="text-muted">{quotes[quote].title}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
