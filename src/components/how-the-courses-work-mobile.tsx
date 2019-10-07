import React from 'react';

interface Props {
  backgroundColor?: string;
}

export const HowTheCoursesWorkMobile: React.FC<Props> = ({ backgroundColor = '#f2f2f2' }) => (
  <section id="howTheCoursesWork" style={{ backgroundColor }}>
    <div className="container">
      <h2 className="h1 text-center mb-4">How the Courses Work</h2>
      <div className="d-flex justify-content-center">
        <ol>
          <li className="mb-4">Enroll online and access your course materials</li>
          <li className="mb-4">Complete your theoretical and practical assignments, and receive personalized audio feedback from your tutor</li>
          <li>Graduate from QC and become a Certified Makeup Artist</li>
        </ol>
      </div>
    </div>
  </section>
);
