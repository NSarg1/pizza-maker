import React from 'react';
import CuttingBoard from '../../components/cutting-board/CuttingBoard.component';
import Pizza from '../../components/pizza/Pizza.component';

const PizzaBaker = () => {
    return (
        <div className="pizza-baker">
            <h1 className="pizza-baker__title">You make, we bake</h1>
            <div className="pizza-baker__main">
                <Pizza />
                <CuttingBoard />
            </div>
        </div>
    );
};

export default PizzaBaker;
