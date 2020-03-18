import React from 'react';
import CuttingBoard from '../../components/cutting-board/CuttingBoard.component';
import Pizza from '../../components/pizza/Pizza.component';
import PriceList from '../../components/price-list/PriceList.component';

const PizzaBaker = () => {
    return (
        <div className="pizza-baker">
            <h1 className="pizza-baker__title">You make, we bake</h1>
            <div className="pizza-baker__container">
                <div className="pizza-baker__main">
                    <Pizza />
                    <CuttingBoard />
                    <PriceList />
                </div>
            </div>
        </div>
    );
};

export default PizzaBaker;
