import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         password:"",
         topic:"",
         comments:""
      }
    }
    handleUsernameChange =event =>{
        this.setState({
            username:event.target.value
        })
    }
    handlePasswordChange = event =>{
        this.setState(
            {
                password:event.target.value
            }
        )
    }
    handleTopicChange= event =>{
        this.setState({
            topic:event.target.value
        })
    }
    handleCommentsChange = event =>{

        this.setState({
            comments:event.target.value
        })
    }
    handleFormSubmit = event =>{
        alert(`username = ${this.state.username} password =  ${this.state.password} topic = ${this.state.topic} comments = ${this.state.comments}`)
        event.preventDefault()
    }
  render() {
    const {username,password,topic,comments} = this.state
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={this.handleUsernameChange}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={this.handlePasswordChange}/>
            </div>
            <div>
                <label>Topics</label>
                <select value={topic} onChange={this.handleTopicChange}>
                    <option value="react">React</option>
                    <option value="vue">Vue</option>
                    <option value="anguler">Anguler</option>
                </select>
            </div>
            <div>
                <label>Comments</label>
                <input type="text" value={comments} onChange={this.handleCommentsChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>
      </>
    )
  }
}

export default Form
