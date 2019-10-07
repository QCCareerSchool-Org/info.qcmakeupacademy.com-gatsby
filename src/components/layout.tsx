import axios from 'axios';
import { withPrefix } from 'gatsby';
import PropTypes from 'prop-types';
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import { useCountryCode } from '../hooks/use-country-code';

import './layout.scss';

interface Props {
  children: ReactNode;
}

export const CountryContext = React.createContext<string | undefined>(undefined);

export const Layout: React.FC<Props> = ({ children }) => {

  const countryCode = useCountryCode();

  let telephoneNumber;
  if (typeof countryCode === 'undefined' || countryCode === 'CA' || countryCode === 'US') {
    telephoneNumber = '1-833-600-3751';
  } else if (countryCode === 'GB') {
    telephoneNumber = '0800 066 4734';
  } else if (countryCode === 'GB') {
    telephoneNumber = '1800 531 923';
  } else if (countryCode === 'GB') {
    telephoneNumber = '0800-451-979';
  } else {
    telephoneNumber = '+1 613 749 8248';
  }

  return (
    <CountryContext.Provider value={countryCode}>
      <Helmet
        // link={[
        //   { rel: 'stylesheet', href: 'https://api.qccareerschool.com/geoLocation/css' },
        // ]}
        script={[
          { src: withPrefix('activecampaign.js'), async: true },
          { src: withPrefix('perfect-audience.js'), async: true },
          { src: withPrefix('livechat.js'), async: true },
        ]}
      />
      <main>{children}</main>
      <footer className="bg-black text-white text-center" style={{padding: '3rem 0 6rem'}}>
        <div className="container">
          <h2>Have questions? Give us a call.</h2>
          <p className="h3 mb-4"><a href={'tel:' + telephoneNumber}>{telephoneNumber}</a></p>
          <p>© {new Date().getFullYear()} QC Makeup Academy<br /><a href="https://www.qcmakeupacademy.com/terms.html">Privacy Policy</a></p>
        </div>
      </footer>
    </CountryContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
