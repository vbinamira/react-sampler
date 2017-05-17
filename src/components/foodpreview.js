import React from 'react';
import { Link } from 'react-router';

export default class FoodPreview extends React.Component {
  render() {
    return (
      <Link to={`/food/${this.props.id}`}>
        <div className="food-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
          <span className="ingredients-count"> {this.props.ingredients.length}</span>
        </div>
      </Link>
    );
  }
}