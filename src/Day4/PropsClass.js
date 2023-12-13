import React, { Component } from 'react'

export default class PropsClass extends Component {
  render() {
    return (
      <div>
        <h2>I am studying at {this.props.college}</h2>
      </div>
    )
  }
}

