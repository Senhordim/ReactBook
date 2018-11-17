import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

const Header = ({ title }) => (
  <div className="App-header">
    <h2>{title}</h2>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'ReactBook',
};

export default Header;
