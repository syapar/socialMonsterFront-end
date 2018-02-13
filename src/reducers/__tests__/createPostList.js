import createList from '../createPostList';
import * as actionTypes from '../../constants/ActionTypes';
import * as filterTypes from '../../constants/FilterTypes';

const setup = filter => {
    const postList = createList(filter);

    return {
        postList,
    }
};

let state = {
    ids: [],
    isFetching: false,
    errorMessage: null,
};
let postList;

describe('createList reducer',() => {
    beforeAll(() => {
        postList = setup(filterTypes.ALL).postList;
    });

    it('should return initialState', () => {
        expect(postList(undefined, {})).toEqual(state);
    });

    it('should handle ADD_POST_SUCCESS action', () => {
        const expectedValue = {
            ...state,
            ids:[
                '11111',
            ]
        };

        expect(postList(state,{
            type: actionTypes.ADD_POST_SUCCESS,
            response: {
                entities: {
                    posts: {
                        '11111':{
                            id: '11111',
                            title: 'ttt111',
                            text: 'hey',
                            seen: false,
                        }
                    },
                },
                result: '11111',
            },
        })).toEqual(expectedValue);

        state = expectedValue;
    });

    it('should handle FETCH_POSTS_REQUEST action to set isFetching parameter', () => {
        const expectedValue = {
            ...state,
            isFetching: true,
        };

        expect(postList(state,{
            type: actionTypes.FETCH_POSTS_REQUEST,
            filter: filterTypes.ALL,
        })).toEqual(expectedValue);

        state = expectedValue;
    });

    it('should handle FETCH_POSTS_FAIL action to set errorMessage parameter', () => {
        const expectedValue = {
            ...state,
            isFetching: false,
            errorMessage: 'ERROR MESSAGE',
        };

        expect(postList(state,{
            type: actionTypes.FETCH_POSTS_FAIL,
            filter: filterTypes.ALL,
            message: 'ERROR MESSAGE',
        })).toEqual(expectedValue);

        state = expectedValue;
    });

    it('should handle FETCH_POSTS_SUCCESS action', () => {
        const expectedValue = {
            ...state,
            errorMessage: null,
            ids:[
                '11111',
                '22222',
            ]
        };

        expect(postList(state,{
            type: actionTypes.FETCH_POSTS_SUCCESS,
            filter: filterTypes.ALL,
            response: {
                entities: {
                    posts: {
                        '11111':{
                            id: '11111',
                            title: 'ttt111',
                            text: 'hey',
                            seen: false,
                        },
                        '22222':{
                            id: '22222',
                            title: 'ttt222',
                            text: 'ho',
                            seen: false,
                        }
                    },
                },
                result: [
                    '11111',
                    '22222'
                ],
            },
        })).toEqual(expectedValue);

        state = expectedValue;
    });

});