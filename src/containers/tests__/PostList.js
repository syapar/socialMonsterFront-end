import React from 'react';

import { ConnectedPostList } from '../PostList';
import { connectMockStore } from '../../utils/MockStore';


const setup = (initialState) => {
    const params = {
        match:{
            params:{
                filter:'all',
            },
        }};
    const { component, mockStore } = connectMockStore(ConnectedPostList, initialState, params);

    return {
        component,
        mockStore
    }
};

const baseState = () => ({
    post:{
        listByFilter:{
            all:{
                ids:[],
                isFetching:false,
                errorMessage:null,
            }
        }
    }
});

describe('PostList Component', () => {
    describe('when it is Fetching', () => {
        it('should render Loading Text', () => {
            const initialState = baseState();
            initialState.post.listByFilter.all = {
                ...initialState.post.listByFilter.all,
                isFetching:true,
            };

            const { component } = setup(initialState);
            expect(component.find('p').text()).toMatch('Loading...');
        });
    });
    // describe('when it has ErrorMessage', () => {
    //     it('should render Error Message', () => {
    //         const initialState = baseState();
    //         initialState.post.listByFilter.all = {
    //             ...initialState.post.listByFilter.all,
    //             errorMessage:'ERROR MESSAGE'
    //         };
    //
    //         const { component } = setup(initialState);
    //
    //         expect(component.find('Error').prop('message')).toMatch('ERROR MESSAGE');
    //     });
    //
    // });
    // describe('when it has posts', () => {
    //     it('should render Posts with keys', () => {
    //         const initialState = baseState();
    //
    //         initialState.post = {
    //             ...initialState.post,
    //             byId:{
    //                 1234:{
    //                     id: 1234,
    //                     title: 'ttt111',
    //                     text: 'hey',
    //                     seen: false,
    //                 }
    //             },
    //         };
    //
    //         initialState.post.listByFilter.all = {
    //             ...initialState.post.listByFilter.all,
    //             ids:[1234],
    //         };
    //
    //         const { component } = setup(initialState);
    //
    //         const post = component.find('p').first();
    //         expect(post.key()).toEqual('1234');
    //         expect(post.text()).toMatch('hey');
    //     });
    // });
});

