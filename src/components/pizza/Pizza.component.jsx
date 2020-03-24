// LIBRAARIES
import React, { useState } from 'react';
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
import {
    addIngredient,
    setPizzaBaseSize,
    resetAllIngredients,
} from '../../redux/ingredient/ingredient.actions';

//COMPONENTS
import Button from '../button/Button.component';
import AddingIngredient from '../adding-ingredient/AddingIngredient.component';

const Pizza = (props) => {
    const { ingredients, baseSize, selectedBaseSize, addIngredient, setPizzaBaseSize } = props;
    const [state, setState] = useState();
    const [, drop] = useDrop({
        accept: ItemTypes.INGREDIENT,
        drop: ({ ingredient }) => handleDrop(ingredient),
    });

    function handleDrop(ingredient) {
        setState(ingredient);
        addIngredient(ingredient);
    }

    return (
        <div className="pizza" ref={drop}>
            <div className="pizza__main" style={{ transform: `scale(${selectedBaseSize.size})` }}>
                <AddingIngredient state={state} setState={setState} />
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

            <div className="pizza__size u-flex-center-3">
                {baseSize.map((base) => {
                    const classes = base.selected ? 'ns-btn-pizza ns-btn-pizza--active' : 'ns-btn-pizza';
                    return (
                        <Button key={base.id} className={classes} onClick={setPizzaBaseSize.bind(this, base)}>
                            <span className="ns-btn__text pizza__btn-text">{base.name}</span>
                        </Button>
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
    resetAllIngredients: () => dispatch(resetAllIngredients()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pizza);
