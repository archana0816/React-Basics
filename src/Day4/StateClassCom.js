import React,{Component} from "react";
class StateClassCom extends Component
{
    state={
        name:"ABINAYA",
        fan:"RCB"
    }

    handleChange=()=>{this.setState({name:"ARCHANA",fan:"CSK"})}
    render()
    {
        return(
            <div>
                <h1>{this.state.name} is a {this.state.fan} fan</h1>
                <button onClick={this.handleChange}>Click me</button>
            </div>
        )
    }
}
export default StateClassCom;