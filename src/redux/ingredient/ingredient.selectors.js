import { createSelector } from 'reselect';

const selectIngredientsStore = (state) => state.ingredients;

export const selectIngredients = createSelector(
    [selectIngredientsStore],
    (ingredients) => ingredients.ingredients
);

export const selectBaseSize = createSelector([selectIngredientsStore], (ingredients) => ingredients.baseSize);

export const selectSelectedBaseSize = createSelector([selectBaseSize], (baseSizes) =>
    baseSizes.find((elm) => elm.selected === true)
);
