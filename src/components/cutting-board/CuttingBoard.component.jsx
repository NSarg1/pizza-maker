// LIBRARIES
import React from 'react';
import uniqid from 'uniqid';

//COMPONENTS
import Ingredient from '../ingredient/Ingredient.component';

const ingredientObj = [
    { id: uniqid(), name: 'olive', imgUrl: require('../../assets/ingredients/olive.png') },
    { id: uniqid(), name: 'tomato', imgUrl: require('../../assets/ingredients/tomato.png') },
    { id: uniqid(), name: 'greens', imgUrl: require('../../assets/ingredients/greens.png') },
    { id: uniqid(), name: 'mashrooms', imgUrl: require('../../assets/ingredients/mashrooms.png') },
    { id: uniqid(), name: 'sausage', imgUrl: require('../../assets/ingredients/sausage.png') },
];

const CattingBoard = () => {
    return (
        <div className="cutting-board">
            {ingredientObj.map((ingredient) => (
                <Ingredient key={ingredient.id} ingredient={ingredient} />
            ))}
        </div>
    );
};

export default CattingBoard;
