import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TopTitle from '../TopTitle/TopTitle';
import TitleContent from '../TitleContent/TitleContent';
import Note from '../Note/Note';
import BottomNoteActions from '../BottomNoteActions/BottomNoteActions';
import { saveNote } from '../../Redux/Actions';
import './Board.css';

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 5,
      content: '',
      inputState: '',
      titleContent: '',
    };
  }
  componentWillMount() {
    this.setState({
      titleContent: this.props.title,
      content: this.props.content,
    });
  }
   updateContent=(event) => {
     let text = event.target.value;
     const maxLimit = 5;
     if (text.length > maxLimit - 1) {
       text = event.target.value.slice(0, maxLimit);
       this.setState({
         inputState: 'danger',
       });
     } else {
       this.setState({
         inputState: '',
       });
     }
     this.setState({
       content: text,
       count: maxLimit - text.length,
     });
   }

  titleContentSave=(event) => {
    this.setState({
      titleContent: event.target.value,
    });
  }
  saveNote=() => {
    const note = {
      title: this.state.titleContent,
      content: this.state.content,
      noteId: this.props.noteId || this.props.len + 1,
    };
    if (note.title === '' || note.content === '') {
      alert('Please Enter Both the fields');
    } else {
      this.props.saveNote(note);
      this.setState({
        titleContent: '',
        content: '',
        count: 5,
        inputState: '',
      });
    }
  }
  render() {
    return (
      <div className="board">
        <TopTitle
          titleText="Note Title"
          buttonText="en"
        />
        <TitleContent
          titleContentSave={event => this.titleContentSave(event)}
          titleContent={this.state.titleContent}
        />
        <Note
          content={this.state.content}
          updateContent={event => this.updateContent(event)}
          inputState={this.state.inputState}
        />
        <BottomNoteActions
          buttonText="Save"
          remaining={this.state.count}
          save={() => this.saveNote()}
        />
      </div>
    );
  }
}

Board.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  saveNote: PropTypes.func.isRequired,
  noteId: PropTypes.number.isRequired,

};

const mapStateToProps = state => ({
  noteId: state.noteReducer.noteId,
  len: state.noteReducer.notes.length,
  title: state.noteReducer.noteId ? state.noteReducer.notes[state.noteReducer.noteId].title : null,
  content: state.noteReducer.noteId ?
    state.noteReducer.notes[state.noteReducer.noteId].content : null,
});

const mapDispatchToProps = dispatch => ({
  saveNote: note => dispatch(saveNote(note)),
  // editNote: id => dispatch(editNote(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);

