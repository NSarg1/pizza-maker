import React from 'react';

const AddingIngredient = ({ state, setState }) => {
    console.log(state);

    if (state) {
        return (
            <div className="adding-ingredient" onAnimationEnd={() => setState(null)}>
                <span className="adding-ingredient__quantity">{state.quantity + 1}</span>
            </div>
        );
    } else {
        return null;
    }
};

export default AddingIngredient;
