import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state={
            count:0,
        }
    }

    increaseCounter = ()=>{
        this.setState ((prevstate)=>(
          {
            count:prevstate.count+1
          }
        ))
    }
    
    increasecounterFive =()=>{
      this.increaseCounter()
      this.increaseCounter()
      this.increaseCounter()
      this.increaseCounter()
      this.increaseCounter()
    }
  render() {
    return (
      <>
        <button onClick={this.increasecounterFive}>count {this.state.count}</button>
      </>
    )
  }
}
export default Counter;