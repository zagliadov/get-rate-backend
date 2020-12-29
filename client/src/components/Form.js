import React, { Component } from 'react';


export default class Form extends Component {

  state = {
    rate: ''
  }

  onInputChange = e => this.setState({[e.target.name]: e.target.value});
 // this.setState({[e.target.name]: e.target.value})

  onButtonClick = (e) => {
    e.preventDefault();
    this.props.addNewRate(this.state.rate);
  }

  render = () => {
    const {rate} = this.state;
    return (
      <form className="App">
        <h1>Form</h1>
        <input type="text" value={rate} name="rate" onChange={this.onInputChange} />
        <button onClick={this.onButtonClick}>Send</button>
      </form>
    );
  }

}
