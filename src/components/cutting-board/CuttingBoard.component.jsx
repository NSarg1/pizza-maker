// LIBRARIES
import React from 'react';
import uniqid from 'uniqid';

//COMPONENTS
import Ingredient from '../ingredient/Ingredient.component';

const ingredientObj = [
    { name: 'Cheese', id: uniqid() },
    { name: 'Olive', id: uniqid() },
    { name: 'Tomato', id: uniqid() },
    { name: 'Pepper', id: uniqid() },
    { name: 'Mushrooms', id: uniqid() },
    { name: 'Smoked meat', id: uniqid() },
];

const CattingBoard = () => {
    return (
        <div className="cutting-board">
            {ingredientObj.map(ingredient => (
                <Ingredient key={ingredient.id} ingredient={ingredient} />
            ))}
        </div>
    );
};

export default CattingBoard;
