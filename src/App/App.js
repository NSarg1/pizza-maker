import React from 'react';
import Notification from '../components/notification/Notification';

//PAGES
import PizzaBaker from '../pages/pizza-baker/PizzaBaker.page';
import OrderedPizzas from '../pages/ordered-pizzas/OrderedPizzas.page';
//LAYOUT
import Header from '../layout/header/Header.layout';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Route component={Header} />
            <main className="main">
                <Switch>
                    <Route exact path="/" component={PizzaBaker} />
                    <Route exact path="/ordered-pizzas" component={OrderedPizzas} />
                </Switch>
            </main>
            <Notification />
        </div>
    );
}

export default App;
