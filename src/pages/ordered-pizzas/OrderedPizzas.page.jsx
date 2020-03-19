import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectPrevOrders } from '../../redux/prev-orders/prev-orders.selectors';

import { clearPizzaHistory } from '../../redux/prev-orders/prev-orders.actions';

import Button from '../../components/button/Button.component';

const OrderedPizzas = ({ prevOrders, clearPizzaHistory }) => {
    console.log(prevOrders);

    const handleOrderClick = () => {
        alert('You have ordered succesfully. Bon apety.');
    };

    return (
        <div className="ordered-pizzas">
            {prevOrders.length ? (
                <>
                    <div className="ordered-pizzas__top">
                        <Button className="ns-btn-pizza" onClick={clearPizzaHistory}>
                            <span className="pizza__btn-text">Clear history</span>
                        </Button>
                    </div>
                    <div className="ordered-pizzas__bottom">
                        {prevOrders.map((order, ind) => {
                            return (
                                <div key={ind} className="ordered-pizzas__collection">
                                    <div>
                                        {order.map((ing) => {
                                            return ing.type === 'base' ? (
                                                <div>
                                                    <div key={ing.id} className="ordered-pizzas__item-title">
                                                        <span>BASE: {ing.name}</span>
                                                    </div>
                                                    <div className="u-flex-center">INGREDIENTS</div>
                                                </div>
                                            ) : (
                                                <div key={ing.id} className="ordered-pizzas__item">
                                                    <span>
                                                        {ing.name.toUpperCase()}: x{ing.quantity}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="order-again">
                                        <Button className="order-again__btn" onClick={handleOrderClick}>
                                            ORDER AGAIN
                                        </Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </>
            ) : (
                <div className="ordered-pizzas__empty-message">You haven't any orders yet</div>
            )}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    prevOrders: selectPrevOrders,
});

const mapDispatchToProps = (dispatch) => ({
    clearPizzaHistory: () => dispatch(clearPizzaHistory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderedPizzas);
