import React from 'react';
import PropTypes from 'prop-types';
import './TopTitle.css';

const TopTitle = props => (
  <div className="first">
    <p>
      <b>{props.titleText}</b>
    </p>
    <button>{props.buttonText}</button>
  </div>
);
TopTitle.propTypes = {
  titleText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
export default TopTitle;

