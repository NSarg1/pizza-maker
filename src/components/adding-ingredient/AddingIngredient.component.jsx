import React from 'react';

const AddingIngredient = ({ state, setState }) => {
    if (state) {
        return (
            <div
                className="adding-ingredient"
                style={{ backgroundImage: `url(${state.pieceImg})` }}
                onAnimationEnd={() => setState(null)}
            />
        );
    } else {
        return null;
    }
};

export default AddingIngredient;
