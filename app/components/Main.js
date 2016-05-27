


import React from 'react'



var Main = React.createClass({
  render(){
    return (
      <div>
      RENDER MUTHERFUCKER. This is my Header
      {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
