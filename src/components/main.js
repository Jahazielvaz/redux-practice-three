import React from 'react';
import store from '../store';
import action from '../actions';

const Main = (props) => {
  return(
    <div>
      <h1>{props.myState}</h1>
      <button onClick={myFunc}>Click Me</button>
    </div>
  )
}

const myFunc = () => store.dispatch(action);





export default Main;
