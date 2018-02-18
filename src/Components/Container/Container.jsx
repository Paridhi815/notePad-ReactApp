import React from 'react';
import ReactDOM from 'react-dom';
import './Container.css';
import Header from '../Header/Header';
import Board from '../Board/Board';
import SavedNotes from '../SavedNotes/SaveNotes';
import FooterButton from '../FooterButton/FooterButton';

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
    if (note.title === '' || note.content === '') {
      alert('Please Enter Both the fields');
    } else {
      const { notes } = this.state;
      notes.push(note);
      this.setState({
        notes,
        titleContent: '',
        content: '',
        count: 5,
        homepage: false,
        inputState: '',
      });
      console.log(this.state.notes);
    }
  }

  goBack=() => {
    this.setState({
      homepage: true,
    });
  }

  edit=(event) => {
    const noteText = event.target.value;
    // for (let i = 0; i < this.notes.length; i += 1) {
    //   while (this.notes[i].content === noteText) {
    //     titleText = this.notes[i].title;
    //   }
    // }
    this.setState({
      content: noteText,
      // title: titleText,
      homepage: true,
    });
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
        <SavedNotes
          notes={JSON.stringify(this.state.notes)}
          edit={this.edit}
        />
        <FooterButton
          buttonText="Create New Note"
          goBack={this.goBack}
        />
      </div>
    );
  }
}
ReactDOM.render(<Container />, document.getElementById('root'));
