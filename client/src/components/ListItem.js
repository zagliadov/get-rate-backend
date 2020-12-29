import React, { Component } from 'react';


export default class ListItem extends Component {

  render() {
    return (
      <div className='list_item'>
        <span>{this.props.data.cc}</span>
        <span>:       </span>
        <span>{this.props.data.rate}</span>
      </div>
  
      
    );
  }
}

 
