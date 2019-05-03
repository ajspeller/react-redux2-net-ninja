import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ninjas: [
        { name: 'AJ', age: 44, belt: 'Brown', id: '1' },
        { name: 'MJ', age: 23, belt: 'Black', id: '2' },
        { name: 'CJ', age: 21, belt: 'Yellow', id: '3' }
      ]
    };
    this.addNinja = this.addNinja.bind(this);
    this.deleteNinja = this.deleteNinja.bind(this);
  }

  addNinja(ninja) {
    ninja.id = Math.random();
    this.setState({ ninjas: [...this.state.ninjas, ninja] });
  }

  deleteNinja(id) {
    this.setState({ ninjas: this.state.ninjas.filter((n) => n.id !== id) });
  }

  render() {
    return (
      <div className='App'>
        <h1>My first React App</h1>
        <p>Welcome to the Multi-verse!</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
