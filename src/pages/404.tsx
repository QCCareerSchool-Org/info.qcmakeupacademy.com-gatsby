import { Link } from 'gatsby';
import React from 'react';

import { Background } from '../components/background';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

import { FreeMakeupStarterKit } from '../components/free-makeup-starter-kit';
import { StartYourCareer } from '../components/start-your-career';
import Logo from '../images/qcma-logo.svg';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Background image="makeupArtistWorkingOnModel" className="text-white">
      <section>
        <div className="container">
          <div className="text-center">
            <a href="https://www.qcmakeupacademy.com/"><img className="mt-1" src={Logo} alt="QC Makeup Academy" height="70" width="214" /></a>
            <h1 className="my-4 text-shadow">Page Not Found</h1>
            <div style={{ height: 48 }} />
            <p>Sorry, the page you're looking for isn't available.</p>
            <Link to="/">Brochure Form</Link>
          </div>
        </div>
      </section>
    </Background>

    <FreeMakeupStarterKit />
    <StartYourCareer />

  </Layout>
);

export default NotFoundPage;
