import PrevOrdersTypes from './prev-orders.types';

const { SAVE_PIZZA_SAMPLE, CLEAR_PIZZA_HISTORY } = PrevOrdersTypes;

export const savePizzaSample = (pizza) => ({
    type: SAVE_PIZZA_SAMPLE,
    payload: pizza,
});

export const clearPizzaHistory = () => ({
    type: CLEAR_PIZZA_HISTORY,
});
