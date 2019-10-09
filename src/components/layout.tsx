import { withPrefix } from 'gatsby';
import PropTypes from 'prop-types';
import React, { ReactNode, useContext } from 'react';
import { Helmet } from 'react-helmet';

import { LocationStateContext } from '../providers/location';
import './layout.scss';

interface Props {
  children: ReactNode;
}

export const CountryContext = React.createContext<string | undefined>(undefined);

export const Layout: React.FC<Props> = ({ children }) => {

  const location = useContext(LocationStateContext);

  let telephoneNumber;
  if (location.countryCode === 'CA' || location.countryCode === 'US') {
    telephoneNumber = '1-833-600-3751';
  } else if (location.countryCode === 'GB') {
    telephoneNumber = '0800 066 4734';
  } else if (location.countryCode === 'GB') {
    telephoneNumber = '1800 531 923';
  } else if (location.countryCode === 'GB') {
    telephoneNumber = '0800-451-979';
  } else {
    telephoneNumber = '+1 613 749 8248';
  }

  return (
    <>
    <Helmet
      script={[
        { src: withPrefix('activecampaign.js'), async: true },
        { src: withPrefix('perfect-audience.js'), async: true },
        { src: withPrefix('livechat.js'), async: true },
      ]}
    />
    <main>{children}</main>
    <footer className="bg-black text-white text-center">
      <section>
      <div className="container mb-5">
        <h2>Have questions? Give us a call.</h2>
        <p className="h3 mb-4"><a href={'tel:' + telephoneNumber}>{telephoneNumber}</a></p>
        <p>© {new Date().getFullYear()} QC Makeup Academy<br /><a href="https://www.qcmakeupacademy.com/terms.html">Privacy Policy</a></p>
      </div>
      </section>
    </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
