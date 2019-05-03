import React, { Component } from 'react';

class AddNinja extends Component {
  constructor(props) {
    super(props);
    this.state = { name: null, age: null, belt: null };
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.addNinja(this.state);
  }

  changeHandler(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            onChange={this.changeHandler}
            type='text'
            name='name'
            id='name'
          />
        </div>
        <div>
          <label htmlFor='age'>Age:</label>
          <input
            onChange={this.changeHandler}
            type='text'
            name='age'
            id='age'
          />
        </div>
        <div>
          <label htmlFor='belt'>Belt:</label>
          <input
            onChange={this.changeHandler}
            type='belt'
            name='belt'
            id='belt'
          />
        </div>
        <div>
          <button>Add Ninja</button>
        </div>
      </form>
    );
  }
}

export default AddNinja;
