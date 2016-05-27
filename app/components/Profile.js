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
          <Notes username={this.props.params.username} notes={this.state.notes} />
        </div>
      </div>
    )
  }
})

module.exports = Profile;
