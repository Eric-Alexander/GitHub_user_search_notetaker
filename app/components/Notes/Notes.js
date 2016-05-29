'use strict';

import React from 'react'

import NotesList from './NotesList'
import AddNote from './AddNote'

var Notes = React.createClass({
  propTypes: {

    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
  },

  render(){
    console.log('Notes: ', this.props.notes)
    return (
    <div>
    <h3> Notes for {this.props.username} </h3>
    <AddNote
      username={this.props.username}
      addNote={this.props.addNote} />
    <NotesList notes={this.props.notes} />

    </div>
    )
  }
});

export default Notes;
