import React from 'react';

import RegisterForm from '../RegisterFrom';
import * as ActionTypes from '../../constants/ActionTypes';
import { connectMockStore } from '../../utils/MockStore';

const setup = (initialState) => {

    const { component, mockStore } = connectMockStore(RegisterForm, initialState);

    return {
        component,
        mockStore,
    }
};

let initialState = {
    user:{
        data:{
            name:'TestUserName'
        },
        isLoggedIn:true,
    }
};
//
// describe('RegisterForm Component', () => {
//     beforeEach(() => {
//
//     });
//     describe('when it is logged in', () => {
//         it('should render user name', () => {
//            const { component } = setup(initialState);
//
//            expect(component.find('div').text()).toMatch('TestUserName');
//        });
//     });
//     describe('when it is not logged in', () => {
//         beforeAll(() => {
//             initialState.user = {
//                 ...initialState.user,
//                 isLoggedIn:false,
//             }
//         });
//         it('should render Send Button', () => {
//             const { component } = setup(initialState);
//             expect(component.find('button')).toHaveLength(1);
//         });
//         it('should call register action when button clicked', () => {
//             const { component,mockStore } = setup(initialState);
//
//             component.find('button').simulate('click');
//             const actions = mockStore.getActions()[0];
//             expect(actions).toEqual({type:ActionTypes.REGISTER_REQUEST});
//         });
//     });
// });