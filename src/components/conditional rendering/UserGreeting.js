import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         IsLogIn:true,
      }
    }
    
  render() {
    // 1- render using if/else 
    // if(this.state.IsLogIn){
    //   return (
    //     <div>
    //       Welcome Eman
    //     </div>
    //   )
    // }
    // else{
    //   return (
    //     <div>
    //       Welcome Guest
    //     </div>
    //   )
    // }

    // 2- render using Element Variables
    // let message;
    // if(this.state.IsLogIn){
      // message = <h3>Welcome Eman</h3>
    // }
    // else{
    //   message = <h3>Welcome Guest</h3>
    // }5

    // return(
    //  <div>{message}</div>
    // )

    // 3- render using ternary operator // recomended I can use jsx 
    // return(
    //   (this.state.IsLogIn)?
    //     <h3>Welcome Eman</h3>
    //     :
    //     <h3>Welcome Guest</h3>
    // )

    // return this.state.IsLogIn?(<h3>Welcome Eman</h3>):( <h3>Welcome Guest</h3>)

    // 4- render using short circuit operator if I want to return one thing only
      // return(
      //   (this.state.IsLogIn)&&(<h3>Welcome Eman</h3>)
      // )

      return this.state.IsLogIn &&  <h3>Welcome Eman</h3>
  }
}

export default UserGreeting
