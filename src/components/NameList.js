import React from 'react'

function NameList() {
    let names = ["eman","fatma","hend"]
    const nameList = names.map(name => <h3>{name}</h3>)
  return (
    <>
        {/* {
            names.map(name => <h3>{name}</h3>)
        } */}

        {
            nameList
        }
    </>
  )
}

export default NameList
