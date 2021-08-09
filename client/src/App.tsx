import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";

type User = {
  username: string;
  password?: string;
}

type AppProps = {
  // className: string;
  user: User;
}

class App extends React.Component<AppProps> {
  state = {
    user: this.props.user,
  };

  render() {
    return (
      <div className="App">
        <header className="">
          
        </header>
      </div>
    );
  }
  
}

export default App;
