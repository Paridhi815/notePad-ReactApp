import React from 'react';
import PropTypes from 'prop-types';
import Top from '../Title/Top';
import Task from '../TitleContent/Task';
import Note from '../Note/Note';
import Bottom from '../NoteActions/Bottom';
import './Board.css';

const Board = props => (
  <div className="board">
    <Top
      titleText="Note Title"
      buttonText="en"
    />
    <Task
      titleContent={event => props.titleContentSave(event)}
      title={props.titleContent}
    />
    <Note
      displayValue={props.content}
      update={event => props.updateContent(event)}
      inputState={props.inputState}
    />
    <Bottom
      buttonText="Save"
      remaining={props.count}
      save={() => props.saveNote()}
    />
  </div>
);

Board.propTypes = {
  titleContentSave: PropTypes.func.isRequired,
  titleContent: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  updateContent: PropTypes.func.isRequired,
  inputState: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  saveNote: PropTypes.func.isRequired,
};

export default Board;

