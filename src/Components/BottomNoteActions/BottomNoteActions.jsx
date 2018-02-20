import React from 'react';
import PropTypes from 'prop-types';
import './BottomNoteActions.css';

const BottomNoteActions = props => (
  <div className="last">

    <button onClick={() => props.save()}>
      <b>{props.buttonText}</b>
    </button>
    <p>{props.remaining} characters left</p>
  </div>
);
BottomNoteActions.propTypes = {
  buttonText: PropTypes.string.isRequired,
  remaining: PropTypes.number.isRequired,
  save: PropTypes.func.isRequired,
};


export default BottomNoteActions;

