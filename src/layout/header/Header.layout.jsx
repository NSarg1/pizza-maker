import React from 'react';

import { connect } from 'react-redux';

import { selectPrevOrders } from '../../redux/prev-orders/prev-orders.selectors';
import { createStructuredSelector } from 'reselect';

const Header = ({ orders, history }) => {
    return (
        <header className="header">
            <div className="header__logo" onClick={() => history.push('/')} />
            <div
                className={!orders.length ? 'header__plate' : 'header__plate header__plate--full'}
                onClick={() => history.push('/ordered-pizzas')}
            />
        </header>
    );
};

const mapStateToProps = createStructuredSelector({
    orders: selectPrevOrders,
});

export default connect(mapStateToProps)(Header);
