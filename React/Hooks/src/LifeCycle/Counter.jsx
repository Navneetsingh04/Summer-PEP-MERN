import React, { Component } from 'react'

class Counter extends Component {

    componentDidUpdate(prev,prevState){
        console.log(prev.number)
        console.log(this.props.number)
        if(prev.number !== this.props.number){
            console.log("Component Updated")
        }
    }

  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}


export default Counter;