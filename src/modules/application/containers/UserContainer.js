import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserContainer extends Component {
  render() {
    console.log('gsgsgsgs');
    return (
      <div>Hello world</div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  };
}

export default connect(mapStateToProps)(UserContainer);
