import React from 'react';


export default class Ingredients extends React.Component {
  render() {
    return (
      <li className="ingredients">
        <span className="amount">{this.props.amount}</span>
        <span className="item"> {this.props.item}</span>
        <span className="store"> ({this.props.store})</span>
      </li>
    );
  }
}