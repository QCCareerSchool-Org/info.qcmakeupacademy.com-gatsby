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

const CatalogBecomeProMakeupArtist: React.FC = () => {
  const screenWidth = useContext(ScreenWidthContext);
  const desktop = screenWidth >= 992;

  const backgroundImage = desktop ? 'makeupArtistWorkingOnModel' : 'applyingLipGloss';
  const backgroundStyle: React.CSSProperties = desktop ? { backgroundPosition: '100% 0%' } : { backgroundPosition: '0% 0%' };

  return (
    <Layout>
      <SEO
        title="Become a Professional Makeup Artist"
        description="Download a free course catalaog from the world's leading online makeup school"
      />

      <Background
        image={backgroundImage}
        style={backgroundStyle}
        className="text-white"
      >
        <section id="catalog-form">
          <div className="container">
            <div className="text-center">
              <a href="https://www.qcmakeupacademy.com/"><img className="mt-1" src={Logo} alt="QC Makeup Academy" height="70" width="214" /></a>
              <h1 className="my-4 text-shadow">Become a Professional Makeup Artist</h1>
            </div>
            <div className="py-2" />
            {desktop
              ? (
                // text on the side of the form
                <div className="row d-flex align-items-center">
                  <div className="col-6">
                    <div className="card text-dark mb-4">
                      <div className="card-body">
                        <div className="p-3">
                          <h2 className="h5 text-left mb-4">Get Started with a Free Course Catalog</h2>
                          <Form formId={2} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 mb-4">
                    <p className="lead text-shadow">Request a free course catalog and find out how QC’s professional makeup training works.</p>
                    <ul>
                      <li>Read about QC’s professional certification courses</li>
                      <li>Find out how you can become a makeup artist in just a few short months</li>
                      <li>Meet the tutors who will mentor you through your course</li>
                      <li>Find out the tuition fees for each course and choose a payment plan</li>
                      <li>Learn how you can’t go wrong with QC’s money back guarantee!</li>
                    </ul>
                  </div>
                </div>
              ) : (
                // no text and form centered
                <div className="row">
                  <div className="col-12 col-md-8 offset-md-2">
                    <div className="card text-dark mb-4">
                      <div className="card-body">
                        <div className="p-sm-3">
                          <h2 className="h5 text-center mb-4">Get Started with a Free Course Catalog</h2>
                          <Form formId={1} />
                        </div>
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
                <h2 className="h4 text-center">In QC’s course catalog you will</h2>
                <div className="d-flex justify-content-center">
                  <ul className="mb-0">
                    <li>Read about QC’s professional certification programs and workshops</li>
                    <li>Find out how you can become a makeup artist in just a few short months</li>
                    <li>Meet the tutors who will mentor you through your course</li>
                    <li>Find out the tuition fees for each course and choose a payment plan</li>
                    <li>Learn how you can’t go wrong with QC’s money back guarantee!</li>
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

export default CatalogBecomeProMakeupArtist;
