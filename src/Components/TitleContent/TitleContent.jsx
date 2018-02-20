import React from 'react';
import PropTypes from 'prop-types';
import './TitleContent.css';

const TitleContent = props => (
  <input
    type="text"
    placeholder="Tasks for today"
    onChange={event => props.titleContentSave(event)}
    value={props.titleContent}
  />
);
TitleContent.propTypes = {
  titleContentSave: PropTypes.func.isRequired,
  titleContent: PropTypes.string.isRequired,
};

export default TitleContent;

