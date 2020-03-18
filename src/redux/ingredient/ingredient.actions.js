import IngredientTypes from './ingredient.types';

const { ADD_INGREDIENT, CHANGE_BASE_SIZE } = IngredientTypes;

export const addIngredient = (ingredient) => ({
    type: ADD_INGREDIENT,
    payload: ingredient,
});

export const setPizzaBaseSize = (base) => ({
    type: CHANGE_BASE_SIZE,
    payload: base,
});
