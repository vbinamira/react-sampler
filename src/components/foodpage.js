import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './notfoundpage';
import FoodMenu from './foodmenu';
import Ingredients from './ingredients';
import food from '../data/food';

export default class FoodPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const food = food.filter((food) => food.id === id)[0];
    if (!food) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${food.cover})` };
    return (
      <div className="food-full">
        <foodMenu food={food}/>
        <div className="food">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${food.image}`}/>
            <h2 className="name">{food.name}</h2>
          </div>
          <section className="description">
            This is a <strong>{food.item}</strong>,
            (Want to see how to make it click<a href={food.link} target="_blank">here</a>).
          </section>
          <section className="ingredients">
            <p><strong>{athlete.ingredients.length}Ingredients: </strong></p>
            <ul>{
              athlete.ingredients.map((ingredient, i) => <Ingredients key={i} {...ingredient}/>)
            }</ul>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}