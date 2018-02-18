import React from 'react';
import PropTypes from 'prop-types';
import './TitleContent.css';

const TitleContent = props => (
  <input
    type="text"
    placeholder="Tasks for today"
    onChange={event => props.titleContent(event)}
    value={props.title}
  />
);
TitleContent.propTypes = {
  titleContent: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
export default TitleContent;

