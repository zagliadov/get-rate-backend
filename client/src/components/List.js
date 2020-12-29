import React, { Component } from 'react';
import ListItem from './ListItem';

export default class List extends Component {

  render() {
    return this.props.rates.map(rate => <ListItem data={rate} />);
  }

}

