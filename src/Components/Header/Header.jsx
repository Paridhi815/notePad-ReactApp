import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';


const Header = props => (
  <header className="head">
    <b>{props.headerText}</b>
  </header>
);

Header.propTypes = {
  headerText: PropTypes.string,
};

Header.defaultProps = {
  headerText: 'hello',
};
export default Header;

