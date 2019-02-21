import React, {Component} from 'react'

/**
 * COMPONENT
 */
class AddGarb extends Component {
  constructor() {
    super()
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return <h3>Radio Form here</h3>
  }
}

/**
 * CONTAINER
 */

export default AddGarb
