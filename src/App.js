import React, { createContext } from 'react'
import ChildA from './Components/ChildA'


// context API looks like callback hell & usecontext is a hook

// steps:
// 1----> create a context using createContext() and export
// 2----> set provider with a value
// 3----> import the created context and use useContext() hook in function


// export const data = createContext();
export const data = createContext();
export const newData =createContext();    //creating context

const App = () => {
  const name = 'Kamran'
  const gender ='Male'
  return (
    <>
    {/* <data.Provider value = {[name,gender]} >  We can pass multiple value in an array and destructure it */}
    
    <data.Provider value = {name}>
    <newData.Provider value = {gender}>
        <ChildA/>
    </newData.Provider>
    </data.Provider>
    {/* </data.Provider> */}
    </>
  )
}

export default App;