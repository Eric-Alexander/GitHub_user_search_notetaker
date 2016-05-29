import React from 'react'

// es5:
// var AddNote= React.createClass({
//   propTypes: {
//     username: React.PropTypes.string.isRequired,
//     addNote: React.PropTypes.func.isRequired
//   },
//   setRef(ref){
//     this.note=ref;
//   },
//   handleSubmit(){
//     var newNote= this.note.value;
//     this.note.value='';
//     this.props.addNote(newNote)
//   },
//   render(){
//     return(
//       <div className="input-group">
//         <input type="text" className="form-control" placeholder="Add a New Note!" ref={this.setRef} />
//         <span className='input-group-btn'>
//           <button className="btn btn-success" type="button" onClick={this.handleSubmit}>Add</button>
//         </span>
//       </div>
//     )
//   }
// });


//es6:

class AddNote extends React.Component {
  handleSubmit(){
    var newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote)
  }
  setRef(ref){
    this.note = ref;
  }
  render(){
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add New Note" ref={(ref) => this.setRef(ref)}/>
        <span className='input-group-btn'>
          <button className="btn btn-default" type="button" onClick={() => this.handleSubmit()}>Submit</button>
        </span>
      </div>
    )
  }
}

AddNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default AddNote;
