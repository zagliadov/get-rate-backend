import React, { Component } from 'react';
import Form from './components/Form';
import List from './components/List';
import axios from 'axios';

class App extends Component {
  
  state = {
    rates: []
  }
  componentDidMount() {
    this.fetchAllRates();
  }
  fetchAllRates() {
    axios.get('/rate')
      .then(rates => {
        this.setState(rates)
      })
  }

  addNewRate(text) {
    axios.post('/rates', { rate: 'USD' })
      .then(data => console.log(data));
  }

  render() {
    const {rates} = this.state;
    return (
      <div className="App">
        <h1>Client</h1>
        <Form addNewRate={this.addNewRate}/>
        <List rates={rates} />
      </div>
    );
  }

}

export default App;
