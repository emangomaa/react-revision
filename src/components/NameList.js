import React from 'react'
import Person from './Person'
function NameList() {
    // let names = ["eman","fatma","hend"]
    // const nameList = names.map(name => <h3>{name}</h3>)
    const persons =[
        {
            name:"fatma",
            age:28,
            job:"Doctor"
        },
        {
            name:"eman",
            age:26,
            job:"Engineer"
        }
        ,
        {
            name:"hend",
            age:24,
            job:"Teacher"
        }
        
    ]
  return (
    <>
        {/* {
            names.map(name => <h3>{name}</h3>)
        } */}

        {/* {
            nameList
        } */}

        {/* {
            persons.map(person => <h3>I am {person.name}, I am {person.age} years old and I work as a {person.job}</h3>)
        } */}
        {
            persons.map(person => <Person person ={person}/>)
        }
    </>
  )
}

export default NameList
