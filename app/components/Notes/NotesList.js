'use strict';

import React from 'react'

var NotesList = React.createClass({
  render(){
    var notes = this.props.notes.map(function(note, index){
      return <li className="list-group-item" key={index}>{note['.value']}</li>

    });
    return (
      <ul className="list-group">
      {notes}

      </ul>
    )
  }


});

export default NotesList;
