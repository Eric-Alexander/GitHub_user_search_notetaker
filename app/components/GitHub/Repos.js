import React from 'react'

var Repos = React.createClass({

  render(){
    return (
    <div>
      <p> Repos of user </p>
      <p>Repos: {this.props.repos}</p>
    </div>
    )
  }
});

module.exports = Repos;
