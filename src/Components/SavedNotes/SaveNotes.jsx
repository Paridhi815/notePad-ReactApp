import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editNote } from '../../Redux/Actions';
import './SaveNotes.css';

const SavedNotes = props => (
  props.notes.map(note =>
    (
      <div className="save-body" key={note.noteId} onClick={() => props.editNote(note.noteId)} >
        <p className="title-text">{note.title}</p>
        <textarea className="note-text">{note.content}</textarea>
      </div>
    ))
);

const mapStateToProps = state => ({
  notes: state.noteReducer.notes,
  noteId: state.noteReducer.noteId,
});

const mapDispatchToProps = dispatch => ({
  editNote: (noteId) => {
    dispatch(editNote(noteId));
  },
});

SavedNotes.propTypes = {
  titleContent: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedNotes);
