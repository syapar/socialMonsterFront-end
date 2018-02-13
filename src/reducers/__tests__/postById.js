import byId from '../postById';
import * as actionTypes from '../../constants/ActionTypes';

const initialState = {};

describe('postById reducer',() => {
    it('should return initialState', () => {
        expect(byId(undefined,{})).toEqual(initialState);
    });
    it('should handle FETCH_POSTS_SUCCESS, ADD_POST_SUCCESS actions', () => {
        let state = {...initialState};

        expect(byId(state,{
            type: actionTypes.FETCH_POSTS_SUCCESS,
            response: {
                entities: {
                    posts: {
                        '12345':{
                            id: '12345',
                            title: 'ttt111',
                            text: 'hey',
                            seen: false,
                        }
                    },
                },
            },
        })).toEqual({
            '12345':{
                id: '12345',
                title: 'ttt111',
                text: 'hey',
                seen: false,
            },
        });

        expect(byId(state,{
            type: actionTypes.ADD_POST_SUCCESS,
            response: {
                entities: {
                    posts: {
                        '12345':{
                            id: '12345',
                            title: 'ttt111',
                            text: 'hey',
                            seen: false,
                        }
                    },
                },
            },
        })).toEqual({
            '12345':{
                id: '12345',
                title: 'ttt111',
                text: 'hey',
                seen: false,
            },
        });

    });
});