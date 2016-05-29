'use strict';

import React from 'react'
import { Router, History } from 'react-router'


var SearchGitHub = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },
  mixins: [Router.History],
  getRef(ref){
    this.usernameRef = ref;
  },
  handleSubmit(){
    var username = this.usernameRef.value;
    this.usernameRef.value='';
    this.context.router.pushState(null, "profile/" + username)
   },
  render(){
    return(
      <div className="col-sm-10">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={this.getRef} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary"> Search User </button>
          </div>
        </form>
      </div>
    )
  }
});

export default SearchGitHub;
