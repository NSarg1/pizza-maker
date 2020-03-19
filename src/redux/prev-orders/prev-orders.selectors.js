import { createSelector } from 'reselect';

const selectPrevOrdersState = (state) => state.prevOrders;

export const selectPrevOrders = createSelector([selectPrevOrdersState], (state) => state.orders);
