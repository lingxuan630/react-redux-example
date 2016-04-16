import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UserActions from '../../../actions/user'

class App extends Component {
  render() {
    const { user, actions } = this.props
    return (
      <div>
        Hello
        <div>
          {React.cloneElement(this.props.children || <div/>)}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  user: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
