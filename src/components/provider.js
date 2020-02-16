import React from 'react';
import { Provider } from 'react-redux';

const provider = (Component,store) => {
    return (
        <Provider store={store}>
            <Component />>
        </Provider>
    )
}

export default provider;