import React from 'react'


const increment =(num)=>{
    return {
      type: 'INCREMENT',
      payLoad: num ? num : 2
    }
  }
  const decrement =(num)=>{
    return {
      type: 'DECREMENT',
      payLoad: num ? num : 1
    }
  }


export  {increment , decrement }