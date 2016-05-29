import React from 'react'


var AddNote= React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  setRef(ref){
    this.note=ref;
  },
  handleSubmit(){
    var newNote= this.note.value;
    this.note.value='';
    this.props.addNote(newNote)
  },

  render(){


    return(
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add a New Note!" ref={this.setRef} />
        <span className='input-group-btn'>
          <button className="btn btn-success" type="button" onClick={this.handleSubmit}>Add</button>
        </span>
      </div>


    )
  }
});

export default AddNote;
