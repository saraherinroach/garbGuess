import React, {Component} from 'react'

import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

import {getGarbs, getGarbsByType} from '../store/garb'

/**
 * COMPONENT
 */
class UserHome extends Component {
  constructor() {
    super()
    this.state = {
      type: null
    }
  }

  // getGarbsByType(type) {
  //   this.props.getGarbsByType(this.props.userId, type)
  // }

  componentDidMount() {
    this.props.getGarbs(this.props.userId)
  }

  render() {
    const {email, garbs} = this.props

    console.log(this.props)

    return (
      <div>
        <h3>Welcome, {email}</h3>
        <button
          onClick={() => this.props.getGarbsByType(this.props.userId, 'top')}
        >
          See All Tops
        </button>
        <button
          onClick={() => this.props.getGarbsByType(this.props.userId, 'bottom')}
        >
          See All Bottoms
        </button>
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
        <Link to="/addGarb">Add a Garb</Link>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapStateToProps = state => {
  console.log(state)
  return {
    email: state.user.email,
    garbs: state.garb,
    userId: state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGarbs: userId => dispatch(getGarbs(userId)),
    getGarbsByType: (userId, type) => dispatch(getGarbsByType(userId, type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
