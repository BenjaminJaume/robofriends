import React, { Component } from 'react';
import CardList from './CardList';
import SeachBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    };
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="text-center">
        <h1 className="my-2">RobotFriends</h1>
        <SeachBox searchChange={this.onSearchChange} />
        <CardList robots={filterRobots} />
      </div>
    );
  }
}

export default App;
