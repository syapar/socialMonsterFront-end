import React from 'react';

import { ConnectedHeader } from '../Header';
import { connectMockStore } from '../../utils/MockStore';
import * as PageTypes from '../../constants/PageTypes';

const setup = (initialState) => {
    const params = {};
    const { component, mockStore } = connectMockStore(ConnectedHeader, initialState, params);

    return {
        component,
        mockStore
    }
};

// describe('Header Component', () => {
//     it('should render Home Page Link', () => {
//         const { component } = setup();
//
//         expect( component.find({page:PageTypes.HOME}) ).toHaveLength(1);
//     });
//     it('should render LogOut Button', () => {
//         const { component } = setup();
//
//         expect( component.find({id:'logOutButton'}) ).toHaveLength(1);
//     });
// });