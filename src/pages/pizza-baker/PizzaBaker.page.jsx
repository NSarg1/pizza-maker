import React from 'react';
import { connect } from 'react-redux';

import CuttingBoard from '../../components/cutting-board/CuttingBoard.component';
import Pizza from '../../components/pizza/Pizza.component';
import PriceList from '../../components/price-list/PriceList.component';

//ACTIONS
import { resetAllIngredients } from '../../redux/ingredient/ingredient.actions';

//COMPONENTS
import Button from '../../components/button/Button.component';

const PizzaBaker = ({resetAllIngredients}) => {
    return (
        <div className="pizza-baker">
            {/* <h1 className="pizza-baker__title">You make, we bake</h1> */}
            <div className="pizza-baker__container">
                <div className="u-flex-center-2">
                    <Button className="ns-btn-pizza" onClick={resetAllIngredients}>
                        <span className="ns-btn__text pizza__btn-text">RESET PIZZA</span>
                    </Button>
                </div>
                <div className="pizza-baker__main">
                    <Pizza />
                    <CuttingBoard />
                    <PriceList />
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    resetAllIngredients: () => dispatch(resetAllIngredients()),
});

export default connect(null, mapDispatchToProps)(PizzaBaker);
