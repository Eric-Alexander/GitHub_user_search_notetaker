import React from 'react'
import Router from 'react-router'
import ReactFireMixin from 'reactfire'
import Firebase from 'firebase'

import Notes from './Notes/Notes'
import Repos from './GitHub/Repos'
import UserProfile from './GitHub/UserProfile'

var Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState () {
    return {
      notes: [4,6,5,4],
      bio: {
        name: "Eric Kickass"
      },
      repos: ['a','b','c']

    }

  },
  //this is where you setup all ajax request, firebase listeners-gets called right after component mounts to the view
  componentDidMount (){
    this.ref = new Firebase('https://githubusersearch.firebaseio.com/');
    var childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');

  },
  componentWillUnmount(){
    this.unbind('notes');
  },
  //always try and pass down state from the parent component this next function will update Firebase with a new note
  handleAddNote(newNote){
    //we dont want to update the root reference (Firebase itself) so we pass in child and even one level deeper with [notes].length
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote)

  },
  render (){
    return (
      <div className="row">
        <div className = "col-md-4">
        <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className = "col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className = "col-md-4">
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            addNote={this.handleAddNote} />
        </div>
      </div>
    )
  }
})

module.exports = Profile;
