import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

class App extends Component {

componentDidMount = () => {
  return fetch('https://f1-takes-vegas.herokuapp.com/api/v1/constructors')
  .then(response => response.json())
  .then(data => console.log(data.constructors[0].name))
}

  render(){
  return (
    <main className="App">
      <div className='title'> F1 takes Vegas!!!</div>
    </main>
  );
  }
}

export default App;
