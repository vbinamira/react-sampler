// src/components/AthletesMenu.js
import React from 'react';
import { Link } from 'react-router';

export default class FoodMenu extends React.Component {
  render() {
    return (
      <nav className="food-menu">
        {this.props.food.map(menuFood => {
          return <Link key={menuFood.id} to={`/athlete/${menuFood.id}`} activeClassName="active">
            {menuFood.name}
          </Link>;
        })}
      </nav>
    );
  }
}