import React, { useContext } from 'react';

import { Background } from '../components/background';
import { Form } from '../components/form';
import { FreeMakeupStarterKit } from '../components/free-makeup-starter-kit';
import { HowTheCoursesWorkDesktop } from '../components/how-the-courses-work-desktop';
import { HowTheCoursesWorkMobile } from '../components/how-the-courses-work-mobile';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { StartYourCareer } from '../components/start-your-career';
import { StudentQuote } from '../components/student-quote';

import { ScreenWidthContext } from '../providers/screen-width';

import Logo from '../images/qcma-logo.svg';

const CatalogLearnMakeupOnline = () => {
  const screenWidth = useContext(ScreenWidthContext);
  const desktop = screenWidth >= 992;

  return (
    <Layout>
      <SEO
        title="Learn from the Top Makeup Academy"
        description="Download a free course catalaog from the top makeup academy"
      />

      <Background image="faceWithGoldEyeShadow" style={{ backgroundPosition: '50% 0%' }} className="text-white">
        <section id="catalog-form">
          <div className="container">
            <div className="text-center">
              <a href="https://www.qcmakeupacademy.com/"><img className="mt-1" src={Logo} alt="QC Makeup Academy" height="70" width="214" /></a>
              <h1 className="my-4 text-shadow">Learn from the Top Makeup Academy</h1>
            </div>
            <div className="py-2" />
            {desktop
              ? (
                // text beside the form
                <div className="row d-flex align-items-center">
                  <div className="col-6">
                    <div className="card p-4 text-dark">
                      <div className="p-sm-4">
                        <h5 className="text-center mb-4">Get Started with a Free Course Catalog</h5>
                        <Form />
                      </div>
                    </div>
                  </div>
                  <div className="col-5">
                    <h4 className="text-shadow">Online learning can be just as effective as in-class learning.</h4>
                    <p className="lead text-shadow">Download a free course catalog to</p>
                    <ul>
                      <li>Read about QC’s professional certification courses</li>
                      <li>Discover why QC’s online training program is better than classroom learning</li>
                      <li>Meet the tutors who will mentor you through your course</li>
                      <li>Find out the tuition fees for each course and choose a payment plan</li>
                      <li>Learn how you can’t go wrong with QC’s money back guarantee!</li>
                    </ul>
                  </div>
                </div>
              ) : (
                // no text and form centered
                <div className="row">
                  <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mb-4">
                    <div className="card p-4 text-dark">
                      <div className="p-sm-4">
                        <h5 className="text-center mb-4">Get Started with a Free Course Catalog</h5>
                        <Form />
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </section>
      </Background>

      {desktop
        ? (
          <>
            <HowTheCoursesWorkDesktop />
            <StudentQuote quote="queenella" />
          </>
        ) : (
          <>
            <section>
              <div className="container">
                <h2 className="h4 text-center">Online learning can be just as effective as in-class learning.</h2>
                <p className="lead text-center">In your free course catalog:</p>
                <div className="d-flex justify-content-center">
                  <ul className="mb-0">
                    <li>Read about QC's professional certification courses</li>
                    <li>Find out how you can become a makeup artist in just a few short months</li>
                    <li>Meet the tutors who will mentor you through your course</li>
                    <li>Find out the tuition fees for each course and choose a payment plan</li>
                    <li>Learn how you can't go wrong with QC's money back guarantee!</li>
                  </ul>
                </div>
              </div>
            </section>
            <HowTheCoursesWorkMobile />
          </>
        )
      }
      <FreeMakeupStarterKit />
      <StartYourCareer />
    </Layout>
  );
};

export default CatalogLearnMakeupOnline;
