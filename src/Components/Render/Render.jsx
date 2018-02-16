import React from 'react';
import ReactDOM from 'react-dom';
import './Render.css';
import Header from '../Header/Header';
import Board from '../Board/Board';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 120,
      content: '',
      inputState: '',
      titleContent: '',
      notes: [],
    };
  }

  updateContent=(event) => {
    let text = event.target.value;
    if (text.length > 119) {
      text = event.target.value.slice(0, 120);
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
      count: 120 - text.length,
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
    };
    const { notes } = this.state;
    notes.push(note);
    this.setState({
      notes,
      titleContent: '',
      content: '',
      count: 120,
    });
    console.log(this.state.notes);
  }
  render() {
    return (
    <div className="container">
      <Header
        headerText="Start Taking Notes"
      />
      <Board
        titleContent={this.state.titleContent}
        content={this.state.content}
        count={this.state.count}
        inputState={this.state.inputState}
        notes={this.state.notes}
        updateContent={this.updateContent}
        titleContentSave={this.titleContentSave}
        saveNote={this.saveNote}
      />
      <Header
        headerText="About Us"
      />
    </div>
    );
  }
}
ReactDOM.render(<Container />, document.getElementById('root'));
