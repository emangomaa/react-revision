import React, { Component } from 'react'
import Child from './Child'
class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"Parent",
      }
      this.handleGreet = this.handleGreet.bind(this)
    }
    
    
    handleGreet(childName){
        // alert(this.state.message +" parents " + "from "+ childName)
        // using backtic
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
  render() {
    return (
      <>
        <Child handleGreet = {this.handleGreet}/>
      </>
    )
  }
}

export default Parent
