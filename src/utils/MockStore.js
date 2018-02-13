import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import reduxMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export const configureMockStore = (initialState = {}) => {
    const middleWares = [thunk];
    const configureMockStore = reduxMockStore(middleWares);
    const mockStore = configureMockStore(initialState);
    mockStore.clearActions();
    return mockStore;
};

export const connectMockStore = (ComponentClass, initialState = {}, params={}) => {
    const mockStore = configureMockStore(initialState);

    const component = mount(
        <Provider store={mockStore}  >
            <ComponentClass {...params}/>
        </Provider>
    );

    return {
        component,
        mockStore,
    };
};