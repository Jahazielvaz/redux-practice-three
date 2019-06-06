import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store';
import action from './actions';

import Main from './components/main';

class App extends Component {
  render(){

    return (
      <div className="App">
        <Main myState={store.getState().message} />
      </div>
    );
  }
}

export default App;
