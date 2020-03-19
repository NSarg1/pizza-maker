import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import ingredientReducer from './ingredient/ingredient.reducer';
import prevOrdersReducer from './prev-orders/prev-orders.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['prevOrders'],
};

const rootReducer = combineReducers({
    ingredients: ingredientReducer,
    prevOrders: prevOrdersReducer,
});

export default persistReducer(persistConfig, rootReducer);
