import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './all.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Cliff Pyles" />
    <link rel="stylesheet" href="//use.typekit.net/bxp4zom.css" />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
