// LIBRAARIES
import React from 'react';
import { useDrop } from 'react-dnd';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

//SELECTORS
import {
    selectIngredients,
    selectBaseSize,
    selectSelectedBaseSize,
} from '../../redux/ingredient/ingredient.selectors';
import { ItemTypes } from '../../react-dnd/ItemTypes';

//ACTIONS
import { addIngredient, setPizzaBaseSize } from '../../redux/ingredient/ingredient.actions';

const Pizza = ({ ingredients, baseSize, selectedBaseSize, addIngredient, setPizzaBaseSize }) => {
    const [, drop] = useDrop({
        accept: ItemTypes.INGREDIENT,
        drop: ({ ingredient }) => handleDrop(ingredient),
    });

    function handleDrop(ingredient) {
        addIngredient(ingredient);
    }

    return (
        <div
            className="pizza"
            ref={drop}
            style={{
                transform: `scale(${selectedBaseSize.size})`,
            }}>
            <div className="pizza__main">
                {ingredients.map((item) => {
                    if (item.quantity && item.portionImg) {
                        return (
                            <div
                                key={item.id}
                                style={{ backgroundImage: `url(${item.portionImg})` }}
                                className={`pizza__ingredient pizza__${item.name}`}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className="pizza__size">
                {baseSize.map((base) => {
                    const classes = base.selected
                        ? 'pizza__size-box pizza__size-box--active'
                        : 'pizza__size-box';

                    return (
                        <div key={base.id} className={classes} onClick={setPizzaBaseSize.bind(this, base)}>
                            <span className="pizza__size-name">{base.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    ingredients: selectIngredients,
    baseSize: selectBaseSize,
    selectedBaseSize: selectSelectedBaseSize,
});

const mapDispatchToProps = (dispatch) => ({
    addIngredient: (ingredient) => dispatch(addIngredient(ingredient)),
    setPizzaBaseSize: (base) => dispatch(setPizzaBaseSize(base)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pizza);
