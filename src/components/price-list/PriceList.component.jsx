import React from 'react';

import { connect } from 'react-redux';

import { selectIngredients, selectSelectedBaseSize } from '../../redux/ingredient/ingredient.selectors';
import { createStructuredSelector } from 'reselect';

const PriceList = ({ ingredients, selectedBaseSize }) => {
    return (
        <div className="price-list">
            <h2 className="price-list__title">Price list</h2>

            <ul className="price-list__content">
                <li className="price-list__item">
                    Base: {selectedBaseSize.name} Size /{selectedBaseSize.weight.toFixed(2)}kg/
                </li>
                {ingredients.map((ing) => {
                    return (
                        <li key={ing.id} className="price-list__item">
                            {ing.name.toUpperCase()}: {ing.quantity} x Portion /
                            {(ing.quantity * ing.weight).toFixed(2)}kg/
                        </li>
                    );
                })}
                <li className="price-list__total">
                    Total price:
                    {(
                        ingredients.reduce((acc, curr) => acc + curr.price * curr.quantity, 0) +
                        selectedBaseSize.price
                    ).toFixed(2)}
                    $
                </li>
            </ul>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    ingredients: selectIngredients,
    selectedBaseSize: selectSelectedBaseSize,
});

export default connect(mapStateToProps)(PriceList);
