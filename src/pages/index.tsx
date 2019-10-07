import { navigate } from 'gatsby';
import React, { useEffect } from 'react';

const IndexPage: React.FC = () => {
  useEffect(() => {
    navigate('/catalog-learn-makeup-online/');
  }, []);
  return null;
};

export default IndexPage;
