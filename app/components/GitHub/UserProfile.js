import React from 'react'

var UserProfile = React.createClass({

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
