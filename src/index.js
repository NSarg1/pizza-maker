
import './index.scss';
/********LIBRARIES*******/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
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
            <BrowserRouter>
                <PersistGate persistor={persistor}>
                    <HashRouter basename="/">
                        <App />
                    </HashRouter>
                </PersistGate>
            </BrowserRouter>
        </Provider>
    </DndProvider>,
    document.getElementById('root')
);
