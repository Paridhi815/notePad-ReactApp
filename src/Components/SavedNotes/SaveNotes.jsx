import React from 'react';
import PropTypes from 'prop-types';
import './SaveNotes.css';

const SavedNotes = props => (
  JSON.parse(props.notes).map(note =>
    (
      <div className="save-body">
        <p className="title-text">{note.title}</p>
        <textarea className="note-text">{note.content}</textarea>
      </div>
    ))
);

SavedNotes.propTypes = {
  titleContent: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default SavedNotes;
