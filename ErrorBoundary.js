import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {hasError:false}
    }

    static getDerivedStateFromError(error){
        //set the state
        return {hasError:true}
    }
  render() {
    if(this.state.hasError)
    return (<h2 style={{"color" : "red"}}>Something Went Wrong</h2>)
    else
    return(
    <>{this.props.children}</>)
  }
}

export default ErrorBoundary