import React from 'react';

const Ingredient = props => {
    const { ingredient } = props;
    return (
        <div key={ingredient.id} className="cutting-board__product">
            {ingredient.name}
        </div>
    );
};

export default Ingredient;
