import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editNote } from '../../Redux/Actions';
import './SaveNotes.css';

// class SavedNotes extends React.Component {
//   onSync = () => {
//     console.log('notes inside onSync:', this.props.notes);
//     fetch('/putNotes', {
//       method: 'POST',
//       body: JSON.stringify(this.props.notes),
//     }).then(response => response.text())
//       .then(data => console.log(data));
//   }
//   render() {
//     const n = this.props.notes;
//     return (
//       <div>
//         {n.map(note => (<div className="save-body" key={note.noteId} onClick={() => this.props.editNote(note.noteId)} >
//           <p className="title-text">{note.title}</p>
//           <textarea className="note-text">{note.content}</textarea>
//                         </div>)
//                       )}
//         <button onClick={() => this.onSync()}>Sync</button>
//       </div>
//     );
//   }
// }

class SavedNotes extends React.Component {
    onSync = () => {
      console.log('notes inside onSync:', this.props.notes);
      fetch('/putNotes', {
        method: 'POST',
        body: JSON.stringify(this.props.notes),
      }).then(response => response.text())
        .then(data => console.log(data));
    }
    render() {
      return (
        <div className="save">
          {this.props.notes.map(note => (
            <div className="save-body" key={note.noteId} onClick={() => this.props.editNote(note.noteId)} >
              <p className="title-text">{note.title}</p>
              <textarea className="note-text">{note.content}</textarea>
            </div>
          ))}
          <button onClick={() => this.onSync()}>Sync</button>
        </div>
      );
    }
}
// const SavedNotes = props => (
//   props.notes.map(note =>
//     (
//       <div className="save-body" key={note.noteId} onClick={() => props.editNote(note.noteId)} >
//         <p className="title-text">{note.title}</p>
//         <textarea className="note-text">{note.content}</textarea>
//       </div>
//     ))
// );

const mapStateToProps = state => ({
  notes: state.noteReducer.notes,
  noteId: state.noteReducer.noteId,
});

const mapDispatchToProps = dispatch => ({
  editNote: noteId => dispatch(editNote(noteId)),
});

SavedNotes.propTypes = {
  titleContent: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedNotes);
