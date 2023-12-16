import React, { Component } from 'react'

export default class ComponentLifeCycle extends Component {
    constructor(props)
    {
        super(props);
        this.state={favColor:"red"}
    }
    componentDidMount()
    {
        setTimeout(()=>{this.setState({favColor:"black"})},5000)
    }

    shouldComponentUpdate()
    {
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        document.getElementById("id1").innerHTML="Previous State "+prevState.favColor;
    }

    componentDidUpdate()
    {
        document.getElementById("id2").innerHTML="Current State "+this.state.favColor;
    }
  render() {
    return (
      <div>
        <h1>My favt color is {this.state.favColor}</h1>
        <p id='id1'></p>
        <p id='id2'></p>
      </div>
    )
  }
}
