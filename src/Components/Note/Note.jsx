import React from 'react';
import PropTypes from 'prop-types';
import './Note.css';

const Note = props => (
  <div className="outerDiv">
    <div className="please">
      <div className="textAbove">
        Please type your note below
      </div>
      <i className="fa fa-sticky-note-o" aria-hidden="true" />
    </div>
    <div className="note">
      <textarea
        onChange={(event) => {
        props.updateContent(event);
      }}
        value={props.content}
        className={props.inputState}
      />
    </div>
  </div>
);

Note.propTypes = {
  content: PropTypes.string.isRequired,
  updateContent: PropTypes.func.isRequired,
  inputState: PropTypes.string.isRequired,
};

export default Note;

