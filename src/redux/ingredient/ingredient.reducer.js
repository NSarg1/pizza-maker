import IngredientTypes from './ingredient.types';
import { changeIngredientsCount, selectBaseSize } from './ingredient.utils';

import { pizzaIngredients, pizzaBaseSizes } from './data';

const { ADD_INGREDIENT, CHANGE_BASE_SIZE , RESET_BASE_AND_INGREDIENTS} = IngredientTypes;

const INITIAL_STATE = {
    ingredients: pizzaIngredients,
    baseSizes: pizzaBaseSizes,
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
                baseSizes: selectBaseSize(state.baseSizes, action.payload),
            };
        case RESET_BASE_AND_INGREDIENTS:
            return {
                ...state,
                ingredients: pizzaIngredients,
                baseSizes: pizzaBaseSizes,
            };
        default:
            return state;
    }
};

export default ingredientReducer;
