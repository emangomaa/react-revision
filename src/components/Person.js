import React, { Component } from 'react'

class Person extends Component {
  render() {
    const {person}= this.props
    return (
      <div>
        <h3>I am {person.name}, I am {person.age} years old and I work as a {person.job}</h3>
      </div>
    )
  }
}

export default Person
