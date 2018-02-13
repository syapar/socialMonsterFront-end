import * as ActionTypes from '../constants/ActionTypes';
import * as api from '../api/fakeApi';
import { normalize } from 'normalizr';
import * as schema from './schema';

export const register = (id) => (dispatch) => {

    dispatch({
        type:ActionTypes.REGISTER_REQUEST,
    });

    return api.register(id).then(
        response => {
            dispatch({
                type:ActionTypes.REGISTER_SUCCESS,
                response: normalize(response, schema.user),
            });
        },
        error =>{
            dispatch({
                type:ActionTypes.REGISTER_FAIL,
                message: error.message || 'Something went wrong.',
            })
        }
    );

};
