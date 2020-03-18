import IngredientTypes from './ingredient.types';
import { changeIngredientsCount, selectBaseSize } from './ingredient.utils';

import { pizzaIngredients, pizzaBaseSizes } from './data';

const { ADD_INGREDIENT, CHANGE_BASE_SIZE } = IngredientTypes;

const INITIAL_STATE = {
    ingredients: pizzaIngredients,
    baseSize: pizzaBaseSizes,
};

const ingredientReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients: changeIngredientsCount(state.ingredients, action.payload),
            };
        case CHANGE_BASE_SIZE:
            return {
                ...state,
                baseSize: selectBaseSize(state.baseSize, action.payload),
            };
        default:
            return state;
    }
};

export default ingredientReducer;
