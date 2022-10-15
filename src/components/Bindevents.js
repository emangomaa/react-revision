import React, { Component } from 'react'

class Bindevents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hello",
      }

    //   this.handleEvent = this.handleEvent.bind(this)
    }

    // handleEvent(){
    //     this.setState({message:"GoodBay!"})
    // }

    // Recomended to use class property with arrow function 
    handleEvent = ()=>{
        this.setState({message:"GoodBay!"})
    }
  render() {
    return (
      <>
        <p>{this.state.message}</p>
        {/* 1- Bind events on render method //NOT Recomended */}
        {/* <button onClick={this.handleEvent.bind(this)}>click</button> */}

         {/* 2- Bind events By using arrow function on event handler*/}
         {/* <button onClick={()=>this.handleEvent()}>click</button> */}

          {/* 3- Bind events on constructor function //Recomended*/}
        {/* <button onClick={this.handleEvent}>click</button> */}

         {/* 4- Bind events By using arrow function with the class property */}
         <button onClick={this.handleEvent}>click</button>
      </>
    )
  }
}

export default Bindevents
