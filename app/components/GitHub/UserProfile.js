import React from 'react'

var UserProfile = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },

  render(){
    return (
    <div>
      <h2>User Profile </h2>
      <h3> Username: {this.props.username} </h3>
      <p> Bio: {this.props.bio.name} </p>

    </div>
    )
  }
});

module.exports = UserProfile;
