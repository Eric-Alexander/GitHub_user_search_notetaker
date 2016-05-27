import React from 'react'
import Router from 'react-router'

import Notes from './Notes/Notes'
import Repos from './GitHub/Repos'
import UserProfile from './GitHub/UserProfile'

var Profile = React.createClass({
  getInitialState () {
    return {
      notes: [],
      bio: {},
      repos: []

    }

  },
  render(){
    return (
      <div className="row">
        <div className = "col-md-4">
        <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className = "col-md-4">
          <Repos repos={this.state.repos} />
        </div>
        <div className = "col-md-4">
          <Notes  notes={this.state.notes} />
        </div>
      </div>
    )
  }
})

module.exports = Profile;
