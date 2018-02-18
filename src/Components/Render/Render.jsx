import React from 'react';
import ReactDOM from 'react-dom';
import './Render.css';
import Header from '../Header/Header';
import Board from '../Board/Board';
import SavedNotes from '../SavedNotes/SaveNotes';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 5,
      content: '',
      inputState: '',
      titleContent: '',
      notes: [],
      homepage: true,
    };
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
    };
    const { notes } = this.state;
    notes.push(note);
    this.setState({
      notes,
      titleContent: '',
      content: '',
      count: 5,
      homepage: false,
    });
    console.log(this.state.notes);
  }
  render() {
    if (this.state.homepage) {
      return (
        <div className="container">
          <Header
            headerText="Start Taking Notes"
          />
          <Board
            titleText="Note Title"
            buttonText="en"
            titleContent={this.state.titleContent}
            content={this.state.content}
            count={this.state.count}
            inputState={this.state.inputState}
            notes={this.state.notes}
            updateContent={this.updateContent}
            titleContentSave={this.titleContentSave}
            saveNote={this.saveNote}
            homepage={this.homepage}
          />
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
        <SavedNotes notes={JSON.stringify(this.state.notes)} />
        <Header
          headerText="About Us"
        />
      </div>
    );
  }
}
ReactDOM.render(<Container />, document.getElementById('root'));
