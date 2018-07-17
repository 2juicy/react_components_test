import React, { Component } from 'react'
import './Notes.css'

export default class Notes extends Component {
    constructor() {
    super();
    this.state = {
      notes: [],
      currentNote: ""
    };
  }

  onInputChange = (e) => {
    this.setState({ currentNote: e.target.value });
  }

  onClick = e => {
    e.preventDefault();
    let newNote = this.state.notes.slice();
    newNote.push(this.state.currentNote);


    this.setState({ notes: newNote, currentNote: '' });
  }
   
  render() {
      let pinNote = this.state.notes.map((e, i) => {
      return (
        <li key={i}>{e}<button>x</button></li>
      );
    });
    return (
      <div>
         <form>
          <input
            className="textArea"
            placeholder='Create a new note!'
            value={this.state.currentNote}
            onChange={this.onInputChange}
            type="text" />
          <button onClick={this.onClick}>Add</button>
        </form>
        <br />
        {this.state.notes.length === 0 ? "No notes yet!" : <ul>{pinNote}</ul>}
      </div>
    )
  }
}