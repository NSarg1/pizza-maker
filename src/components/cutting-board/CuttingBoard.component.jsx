// LIBRARIES
import React from 'react';

import { connect } from 'react-redux';

import { selectIngredients } from '../../redux/ingredient/ingredient.selectors';
import { createStructuredSelector } from 'reselect';

//COMPONENTS
import Ingredient from '../ingredient/Ingredient.component';

const CuttingBoard = ({ ingredients }) => {
    return (
        <div className="cutting-board">
            {ingredients.map((ingredient) => (
                <Ingredient key={ingredient.id} ingredient={ingredient} />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    ingredients: selectIngredients,
});

export default connect(mapStateToProps)(CuttingBoard);
