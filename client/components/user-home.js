import React, {Component} from 'react'

import {connect} from 'react-redux'

/**
 * COMPONENT
 */
class UserHome extends Component {
  render() {
    const {email, garbs} = this.props

    return (
      <div>
        <h3>Welcome, {email}</h3>
        <h2>Your Garbs</h2>
        {garbs.length ? (
          garbs.map(garb => (
            <div>
              <img src={garb.imageUrl} />
            </div>
          ))
        ) : (
          <h4>You don't have any garbs in your inventory</h4>
        )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    garbs: state.garb.garbs
  }
}

export default connect(mapState)(UserHome)
