import React from 'react'

var Repos = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },

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
