import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Container.css';
import Header from '../Header/Header';
import Board from '../Board/Board';
import SavedNotes from '../SavedNotes/SaveNotes';
import FooterButton from '../FooterButton/FooterButton';
import { saveNote, getNotes } from '../../Redux/Actions';

class Container extends React.Component {
  componentDidMount() {
    fetch('/getNotes')
      .then(response => response.json())
      .then((data) => {
        console.log('pari', data);
        this.props.getNotes(data);
      });
  }

  // constructor() {
  //   super();
  //   this.state = {
  //     count: 5,
  //     content: '',
  //     inputState: '',
  //     titleContent: '',
  //     // notes: [],
  //     // homepage: true,
  //     // noteId: null,
  //   };
  // }

  // updateContent=(event) => {
  //   let text = event.target.value;
  //   const maxLimit = 5;
  //   if (text.length > maxLimit - 1) {
  //     text = event.target.value.slice(0, maxLimit);
  //     this.setState({
  //       inputState: 'danger',
  //     });
  //   } else {
  //     this.setState({
  //       inputState: '',
  //     });
  //   }
  //   this.setState({
  //     content: text,
  //     count: maxLimit - text.length,
  //   });
  // }

  // titleContentSave=(event) => {
  //   this.setState({
  //     titleContent: event.target.value,
  //   });
  // }

  // saveNote=() => {
  //   const note = {
  //     title: this.state.titleContent,
  //     content: this.state.content,
  //     noteId: this.state.noteId || this.state.notes.length + 1,
  //   };
  //   if (note.title === '' || note.content === '') {
  //     alert('Please Enter Both the fields');
  //   } else {
  //     const { notes } = this.state;
  //     notes[note.noteId - 1] = note;
  //     this.setState({
  //       notes,
  //       noteId: null,
  //       titleContent: '',
  //       content: '',
  //       count: 5,
  //       homepage: false,
  //       inputState: '',
  //     });
  //   }
  // }

  // goBack=() => {
  //   this.setState({
  //     homepage: true,
  //   });
  // }

  // edit=(titleContent, content, noteId) => {
  //   this.setState({
  //     content,
  //     titleContent,
  //     noteId,
  //     homepage: true,
  //   });
  // }
  render() {
    if (this.props.homepage) {
      return (
        <div className="container">
          <Header
            headerText="Start Taking Notes"
          />
          <Board />
          <Header
            headerText="About Us"
          />
        </div>
      );
    }

    return (
      <div className="container">
        <Header
          headerText="Saved Notes"
        />
        <SavedNotes />
        <FooterButton
          buttonText="Create New Note"
        />
      </div>
    );
  }
}

Container.propTypes = {
  homepage: PropTypes.bool,
  goBack: PropTypes.func.isRequired,
  saveNote: PropTypes.func.isRequired,
};

Container.defaultProps = {
  homepage: true,
};

const mapStateToProps = state => ({
  homepage: state.noteReducer.homepage,
  noteId: state.noteReducer.noteId,
});

const mapDispatchToProps = dispatch => ({
  saveNote: notes => dispatch(saveNote(notes)),
  getNotes: data => dispatch(getNotes(data)),
  // editNote: noteId => dispatch(editNote(noteId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Container);
