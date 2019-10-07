import React from 'react';

import { Background } from '../components/background';
import { Form } from '../components/form';
import { FreeMakeupStarterKit } from '../components/free-makeup-starter-kit';
import { HowTheCoursesWorkDesktop } from '../components/how-the-courses-work-desktop';
import { HowTheCoursesWorkMobile } from '../components/how-the-courses-work-mobile';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { StartYourCareer } from '../components/start-your-career';
import { StudentQuote } from '../components/student-quote';

import { useScreenWidth } from '../hooks/use-screen-width';

import Logo from '../images/qcma-logo.svg';

const CatalogRewardingMakeupCareer = () => {
  const screenWidth = useScreenWidth();
  const desktop = screenWidth >= 992;

  return (
    <Layout>
      <SEO
        title="Unleash Your Creativity"
        description="Turn your love for makeup into a rewarding career. Download a free course catalaog from the top makeup academy"
      />

      <Background
        image="bodyMakeup"
        style={{ backgroundPosition: '100% 0%' }}
        className="text-white"
      >
        <section id="catalog-form">
          <div className="container">
            <div className="text-center">
              <a href="https://www.qcmakeupacademy.com/"><img className="mt-1" src={Logo} alt="QC Makeup Academy" height="70" width="214" /></a>
              <h1 className="my-4 text-shadow">Turn Your Love for Makeup into a Rewarding Career</h1>
            </div>
            <div className="py-2" />
            {desktop
              ? (
                <div className="row d-flex align-items-center">
                  <div className="col-6">
                    <div className="card p-4 text-dark">
                      <div className="p-sm-4">
                        <h5 className="text-center mb-4">Get Started with a Free Course Catalog</h5>
                        <Form />
                      </div>
                    </div>
                  </div>
                  <div className="col-6 mb-5">
                    <h4 className="text-shadow">QC can help you achieve your goals.</h4>
                    <p className="lead text-shadow">Download a free course catalog to find out how QC’s professional makeup training works.</p>
                    <ul>
                      <li>Read about QC’s professional certification courses</li>
                      <li>Discover how you can learn makeup artistry online</li>
                      <li>Learn about the makeup career paths you can choose</li>
                      <li>Meet the tutors who will mentor you through your course</li>
                      <li>Find out the tuition fees for each course and choose a payment plan</li>
                    </ul>
                  </div>
                </div>
              ) : (
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
            <StudentQuote quote="chantal" />
          </>
        ) : (
          <>
            <section>
              <div className="container">
                <h2 className="h4 text-center">QC can help you achieve your career goals.</h2>
                <p className="lead text-center">In this course catalog, you’ll</p>
                <div className="d-flex justify-content-center">
                  <ul className="mb-0">
                    <li>Read about QC’s professional certification courses</li>
                    <li>Find out how you can learn makeup online</li>
                    <li>Discover what your makeup career options are</li>
                    <li>Meet the tutors who will mentor you through your course</li>
                    <li>Find out the tuition fees for each course and choose a payment plan</li>
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

export default CatalogRewardingMakeupCareer;
