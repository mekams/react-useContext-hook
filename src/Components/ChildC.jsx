import React, { useContext } from 'react'
// import {data} from '../App'               //importing context
import {data,newData} from '../App'               //importing context
import ChildD from './ChildD'

const ChildC = () => {
    // const [myName,gd] = useContext(data);   //destructuring
    const myName = useContext(data);
    const gd  = useContext(newData);
  return (
    <div>
      <h1> Hello My name is {myName} & gender is {gd} --- using hook </h1>
      <ChildD/>
    </div>
  )
}

export default ChildC
