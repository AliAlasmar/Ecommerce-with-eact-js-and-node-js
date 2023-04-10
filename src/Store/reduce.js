import React from 'react'

const initalState ={
    count : 0
}

const counter =(state =initalState, action)=>{
    switch(action.type){
       case "INCREMENT" :
        return{
            ...state,
            count : state.count + action.payLoad
        }

      case "DECREMENT":
        return{
            ...state,
            count : state.count - action.payLoad
        }

      default :
      return state
    }

  }

  export default counter