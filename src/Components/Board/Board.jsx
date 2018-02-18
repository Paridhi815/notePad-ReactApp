import React from 'react';
import PropTypes from 'prop-types';
import TopTitle from '../TopTitle/TopTitle';
import TitleContent from '../TitleContent/TitleContent';
import Note from '../Note/Note';
import BottomNoteActions from '../BottomNoteActions/BottomNoteActions';
import './Board.css';

const Board = props => (
  <div className="board">
    <TopTitle
      titleText={props.titleText}
      buttonText={props.buttonText}
    />
    <TitleContent
      titleContent={event => props.titleContentSave(event)}
      title={props.titleContent}
    />
    <Note
      displayValue={props.content}
      update={event => props.updateContent(event)}
      inputState={props.inputState}
    />
    <BottomNoteActions
      buttonText="Save"
      remaining={props.count}
      save={() => props.saveNote()}
    />
  </div>
);

Board.propTypes = {
  titleText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  titleContentSave: PropTypes.func.isRequired,
  titleContent: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  updateContent: PropTypes.func.isRequired,
  inputState: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  saveNote: PropTypes.func.isRequired,
};

export default Board;

