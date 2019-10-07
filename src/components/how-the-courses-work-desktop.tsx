import React from 'react';

import IconCertified from '../images/icon-certified.svg';
import IconFeedback from '../images/icon-feedback.svg';
import IconMaterials from '../images/icon-materials.svg';

interface Props {
  backgroundColor?: string;
}

export const HowTheCoursesWorkDesktop: React.FC<Props> = ({ backgroundColor = '#f2f2f2' }) => (
  <section id="howTheCoursesWork" style={{ backgroundColor }}>
    <div className="container">
      <h2 className="h1 text-center mb-4">How the Courses Work</h2>

      <div className="row sm-gutters">

        <div className="col d-flex">
          <div className="card d-block">
            <div className="card-body">
              <div className="text-center mb-4"><img src={IconMaterials} alt="materials" /></div>
              <p className="card-title lead text-center">Enroll Today &amp; Access Your Course Materials</p>
              <ul className="sm-indent">
                <li>Receive online access to your course within 48 hours</li>
                <li>Receive your physical course books and bonus makeup kit in 5-10 business days</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col d-flex">
          <div className="card d-block">
            <div className="card-body">
              <div className="text-center mb-4"><img src={IconFeedback} alt="feedback" /></div>
              <p className="card-title lead text-center">Submit Assignment &amp; Review Feedback</p>
              <ul className="sm-indent">
                <li>Complete your theoretical and practical assignments</li>
                <li>Your tutor will review your work and provide you with personalized audio feedback</li>
                <li>Review your tutor’s advice to improve your skills for the next unit</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col d-flex">
          <div className="card d-block">
            <div className="card-body">
              <div className="text-center mb-4"><img src={IconCertified} alt="certified" /></div>
              <p className="card-title lead text-center">Graduate from QC &amp; Become a Certified Makeup Artist</p>
              <ul className="sm-indent">
                <li>Receive your international makeup artist certification</li>
                <li>Receive a 50% discount on all additional courses</li>
                <li>Enjoy lifetime access to your course materials!</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
);
