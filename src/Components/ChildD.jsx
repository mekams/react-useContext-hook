import React from 'react'

import {newData,data} from '../App'   //importing context

// using context API here which is callback hell here

const ChildD = ()=>{
    return(
        <data.Consumer>
        {
                (g)=>{
                return(
                    <newData.Consumer>
                        {
                            (n)=>{
                                return(
                                    <h1>My name is {g} and gender is {n}  --using consumer </h1>
                                )
                            }
                        }
                    </newData.Consumer>
                )}
        }

        </data.Consumer>
    )
}

export default ChildD