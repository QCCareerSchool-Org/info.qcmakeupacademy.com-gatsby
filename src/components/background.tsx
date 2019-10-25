import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
  image: string;
}

export const Background: React.FC<Props> = ({ children, style, className, image }) => (
  <StaticQuery
    query={graphql`
      query {
        desktopLearnOnline: file(relativePath: { eq: "backgrounds/desktop-learn-online.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        applyingLipGloss: file(relativePath: { eq: "backgrounds/applying-lip-gloss.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        bodyMakeup: file(relativePath: { eq: "backgrounds/body-makeup.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        faceWithGoldEyeShadow: file(relativePath: { eq: "backgrounds/face-with-gold-eye-shadow.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        makeupArtistWorkingOnModel: file(relativePath: { eq: "backgrounds/makeup-artist-working-on-model.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => (
      <BackgroundImage fluid={data[image].childImageSharp.fluid} backgroundColor={`#040e18`} style={style} className={className}>
        {children}
      </BackgroundImage>
    )}
  />
);
