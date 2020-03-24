import React from 'react';

import { toast } from 'react-toastify';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectPrevOrders } from '../../redux/prev-orders/prev-orders.selectors';

import { clearPizzaHistory } from '../../redux/prev-orders/prev-orders.actions';

import Button from '../../components/button/Button.component';

import { Image } from './ordered-pizzas.styled';

const OrderedPizzas = ({ prevOrders, clearPizzaHistory }) => {
    const handleOrderClick = () => {
        toast('You have placed order successfully. Bon appetit');
    };

    return (
        <div className="ordered-pizzas">
            {prevOrders.length ? (
                <>
                    <div className="u-flex-center-2">
                        <Button className="ns-btn-pizza" onClick={clearPizzaHistory}>
                            <span className="ns-btn__text pizza__btn-text">Clear history</span>
                        </Button>
                    </div>
                    <div className="ordered-pizzas__bottom">
                        {prevOrders.map((order, ind) => {
                            return (
                                <div key={ind} className="ordered-pizzas__collection">
                                    <div>
                                        {order.map((ing) => {
                                            return ing.type === 'base' ? (
                                                <div key={ing.id}>
                                                    <div className="ordered-pizzas__item-title">
                                                        <span>BASE: {ing.name}</span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div key={ing.id} className="ordered-pizzas__item">
                                                    <div className="u-flex-between">
                                                        <Image img={ing.pieceImg} />: x{ing.quantity}
                                                    </div>
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
