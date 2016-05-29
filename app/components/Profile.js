'use strict';

import React from 'react'
import Router from 'react-router'
//Note: cannot use mixins with es6 classes
// import ReactFireMixin from 'reactfire'

import Rebase from 're-base'
// import Firebase from 'firebase'

import Notes from './Notes/Notes'
import Repos from './GitHub/Repos'
import UserProfile from './GitHub/UserProfile'
//the helpers import below becomes
// import helpers from '../utils/helpers'
import getGitHubInfo from '../utils/helpers'
//because I made the export default to be the function and not the module

const base = Rebase.createClass('https://githubusersearch.firebaseio.com/')

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state ={
        notes: [],
        bio: {},
        repos: []
      }
    }
  //this is where you setup all ajax request, firebase listeners-gets called right after component mounts to the view
  componentDidMount (){
    this.init(this.props.params.username)
  }
  componentWillReceiveProps(newProps){
    base.removeBinding(this.ref)
    this.init(newProps.params.username);
  }
  componentWillUnmount(){
    base.removeBinding(this.ref)
  }
  init(username) {
    this.ref = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes'
    });
//helpers.getGitHubInfo becomes
    getGitHubInfo(username)
//because I changed the import and, thus, must change the invocation here.
      .then(function(data){
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      }.bind(this))
  }
  //always try and pass down state from the parent component this next function will update Firebase with a new note
  handleAddNote(newNote){
    //we dont want to update the root reference (Firebase itself) so we pass in child and even one level deeper with [notes].length
    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote])
    })
  }
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
            addNote={(newNote) => this.handleAddNote(newNote)} />
        </div>
      </div>
    )
  }
}

export default Profile;
