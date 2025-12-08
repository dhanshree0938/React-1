import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'

export class ParentComp extends Component {
   

    constructor() {
        super();
        this.state = {username:"Dhanu"}
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({username:"Dhanu"})
        },3000)
    }
  render() {
    console.log("Parent Component rendered");
    return (
      <div>
        <RegularComp username={this.state.username} />
        <PureComp username={this.state.username} />
      </div>
    )
  }
}

export default ParentComp