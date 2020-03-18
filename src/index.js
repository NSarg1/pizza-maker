import './index.scss';
/********LIBRARIES*******/
import React from 'react';
import ReactDOM from 'react-dom';
//REACT DND
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

// REDUX + PERSIST
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

/********* COMPONENTS **********/
import App from './App/App';

ReactDOM.render(
    <DndProvider backend={Backend}>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </DndProvider>,
    document.getElementById('root')
);
