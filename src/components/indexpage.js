import React from 'react';
import FoodPreview from './foodpreview';
import food from '../data/food';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="food-selector">
          {food.map(foodData => <FoodPreview key={foodData.id} {...foodData} />)}
        </div>
      </div>
    );
  }
}