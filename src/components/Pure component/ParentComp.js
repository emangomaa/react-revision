import React, { Component } from 'react'

import PureComp  from './PureComp'
import MemoComp from './MemoComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"eman"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({name:"eman"})
        },2000)
    }
  render() {
    console.log("********parent compnent Rendering")
    return (
      <div>
        <PureComp name={this.state.name}/>
        <MemoComp name={this.state.name}/>
        <RegComp/>
      </div>
    )
  }
}

export default ParentComp
