import React from 'react';

import { connect } from 'react-redux';

function Counter() {
  
      

 
  return (
    <div>
     count: <br/>
      {/* <button onClick={increass}> + </button>
      <button onClick={decreass}> - </button> */}
    </div>
  )
}

let mapToProps =(state)=>{
  return{
    counter: state.counter
  }
}

export default connect(mapToProps)(Counter)
