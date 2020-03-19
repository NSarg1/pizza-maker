import PrevOrdersTypes from './prev-orders.types';

const { SAVE_PIZZA_SAMPLE, CLEAR_PIZZA_HISTORY } = PrevOrdersTypes;

const INITIAL_STATE = {
    orders: [],
};

const prevOrdersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_PIZZA_SAMPLE:
            return {
                ...state,
                orders: [...state.orders, action.payload.filter((ing) => !!ing.quantity)],
            };
        case CLEAR_PIZZA_HISTORY:
            return {
                ...state,
                orders: [],
            };
        default:
            return state;
    }
};

export default prevOrdersReducer;
