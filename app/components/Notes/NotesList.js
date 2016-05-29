'use strict';

import React from 'react'
//THIS BECOMES
// var NotesList = React.createClass({
//   render(){
//     var notes = this.props.notes.map(function(note, index){
//       return <li className="list-group-item" key={index}>{note['.value']}</li>
//
//     });
//     return (
//       <ul className="list-group">
//       {notes}
//
//       </ul>
//     )
//   }
//
//
// });
//THIS
class NotesList extends React.Component {
  render(){
    //implicit return!! see utils/helpers.js for more detailed notes
    //also { notes } is destructuring the variable but you MUST assign is a variable type CONST
    const { notes } = this.props;
    return (
      <ul className="list-group">
        {notes.map((note, index) => (
          <li className="list-group-item" key={index}>{note}</li>
        ))}
      </ul>
      //Note: when removing the return you must replace {} () ...this tripped me up for a bit
    )
  }
}

export default NotesList;
