import user from '../user';
import * as actionTypes from '../../constants/ActionTypes';

const initialState = {
    data: {},
    isSignedIn: false,
    isSignedInRequested: false,
};

describe('user reducer',() => {
    let state = {...initialState};

    it('should return initialState', () => {
        state = user(undefined,{});
        expect(state).toEqual(initialState);
    });
    it('should handle SIGN_IN_REQUEST action', () => {
        state = user(state,{
            type: actionTypes.SIGN_IN_REQUEST,
        });
        expect(state).toEqual({
            data: {},
            isSignedIn: false,
            isSignedInRequested: true,
        });
    });
    it('should handle SIGN_IN_SUCCESS action', () => {
        state = user(state,{
            type: actionTypes.SIGN_IN_SUCCESS,
            response: {
                entities: {
                    users: {
                        '12345':{
                            id: '12345',
                            name: 'serhat yapar',
                            picture: 'profileImage.jpg',
                        }
                    },
                },
                result:'12345',
            },

        });
        expect(state).toEqual({
            data: {
                id: '12345',
                name: 'serhat yapar',
                picture: 'profileImage.jpg',
            },
            isSignedIn: true,
            isSignedInRequested: false,
        });
    });
    it('should handle SIGN_OUT_SUCCESS action', () => {
        state = user(state,{
            type: actionTypes.SIGN_OUT_SUCCESS,
        });
        expect(state).toEqual(initialState);
    });
});