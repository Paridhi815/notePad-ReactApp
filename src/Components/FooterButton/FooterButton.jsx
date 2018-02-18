import React from 'react';
import PropTypes from 'prop-types';
import './FooterButton.css';

const FooterButton = props => (
  <div >
    <button className="footer-button" onClick={props.goBack}>{props.buttonText} </button>
  </div>
);

FooterButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
export default FooterButton;
