import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { toast } from 'react-toastify';

import {
    selectIngredients,
    selectSelectedBaseSize,
    selectTotalOrder,
} from '../../redux/ingredient/ingredient.selectors';

import { savePizzaSample, clearPizzaHistory } from '../../redux/prev-orders/prev-orders.actions';
import { resetAllIngredients } from '../../redux/ingredient/ingredient.actions';

import Button from '../button/Button.component';

const PriceList = (props) => {
    const { ingredients, selectedBaseSize, totalOrder, savePizzaSample, resetAllIngredients } = props;

    const handleOrderClick = () => {
        if (totalOrder.reduce((acc, elm) => acc + elm.quantity, 0) < 2) {
            toast.error('You must choose at least one ingredient');
            return;
        } else {
            savePizzaSample(totalOrder);
            resetAllIngredients();
            toast('You have placed order successfully. Bon appetit');
        }
    };

    return (
        <div className="price-list">
            <h2 className="price-list__title">Price list</h2>

            <ul className="price-list__content">
                <li className="price-list__item">
                    BASE: <span>{selectedBaseSize.name} </span> Size /{selectedBaseSize.weight.toFixed(2)}
                    kg/
                </li>
                {ingredients.map((ing) => {
                    return (
                        <li key={ing.id} className="price-list__item">
                            {ing.name.toUpperCase()}: <span> {ing.quantity}</span>x Portion /
                            {(ing.quantity * ing.weight).toFixed(2)}kg/
                        </li>
                    );
                })}
                <li className="price-list__total">
                    <div>
                        <span>Total price: </span>
                        <span>
                            {(
                                ingredients.reduce((acc, curr) => acc + curr.price * curr.quantity, 0) +
                                selectedBaseSize.price
                            ).toFixed(2)}
                            $
                        </span>
                    </div>

                    <Button className="ns-btn--order-submit" onClick={handleOrderClick}>
                        <span className="ns-btn__text"> Submit order</span>
                    </Button>
                </li>
            </ul>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    ingredients: selectIngredients,
    selectedBaseSize: selectSelectedBaseSize,
    totalOrder: selectTotalOrder,
});

const mapDispatchToProps = (dispatch) => ({
    savePizzaSample: (pizza) => dispatch(savePizzaSample(pizza)),
    clearPizzaHistory: () => dispatch(clearPizzaHistory()),
    resetAllIngredients: () => dispatch(resetAllIngredients()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceList);
