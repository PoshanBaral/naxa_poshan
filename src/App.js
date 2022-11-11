import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import MainRoutes from './router/MainRouter';

import configureStore from './store';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <MainRoutes />
                </Fragment>
            </Provider>
        );
    }
}

export default App;
