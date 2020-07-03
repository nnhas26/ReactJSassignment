import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//stateless
const Input = (props) => {
  return <input onChange={props.action} value={props.value}></input>;
};

//stateless
const Person = (props) => {
  return <h2 onClick={props.action}>{props.name}</h2>;
};

//stateful
class App extends Component {
  state = {
    name: "fiza",
    username: "testing",
    user: {},
  };

  render() {
    return (
      <div className="App">
        <h1>Assignment</h1>
        <Input action={this.onChangeHandler} />
        <Person name="fiza"/>
        <Person name={this.state.name}></Person>
        <Person name={this.state.username}></Person>
        <Person name={this.state.user.name}></Person>
        <Person>
          name={this.state.user.name}
          action={this.onClickHandler}
        </Person>
      </div>
    );
  }

  fetchUser = (userId) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((user) => user)
  }

  componentDidMount() {
    const userId = Math.floor(Math.random() * 10 + 1);
    this.fetchUser(userId).then((user) => this.setState({ user: user}));
  }

  onChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };


  onClickHandler = () => {
    const userId = Math.floor(Math.random() * 10 + 1);
    this.fetchUser(userId).then((user) => this.setState({ user: user }));
  };
}

export default App;
