import React, { Component } from 'react'

export class Hero extends Component {
    //props and sttaw in class based component
    constructor(props){
      super(props);
      if(this.props.heroname === "Joker"){
        throw new Error ("Not a Hero..!!")

      }
    }
  render() {
    return (
      <div>
       <h2>Heroname: {this.props.heroname}</h2>
      </div>
    )
  }
}

export default Hero
