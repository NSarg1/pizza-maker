import IngredientTypes from './ingredient.types';

const { ADD_INGREDIENT, CHANGE_BASE_SIZE, RESET_BASE_AND_INGREDIENTS } = IngredientTypes;

export const addIngredient = (ingredient) => ({
    type: ADD_INGREDIENT,
    payload: ingredient,
});

export const setPizzaBaseSize = (base) => ({
    type: CHANGE_BASE_SIZE,
    payload: base,
});

export const resetAllIngredients = () => ({
    type: RESET_BASE_AND_INGREDIENTS,
});
