import * as registerActions from '../registerActions';
import * as ActionTypes from '../../constants/ActionTypes';
import { configureMockStore } from '../../utils/MockStore';

const setup = (initialState = {}) => {
    const mockStore = configureMockStore(initialState);

    return {
        mockStore,
    };
};

// describe('postActions',()=>{
//     it('should create REGISTER_REQUEST and REGISTER_SUCCESS actions when addPost is called', ()=>{
//         const { mockStore } = setup();
//
//         return mockStore.dispatch(registerActions.register('12345')).then(() => {
//             // return of async actions
//             expect(mockStore.getActions()[0].type).toEqual(ActionTypes.REGISTER_REQUEST);
//             expect(mockStore.getActions()[1].type).toEqual(ActionTypes.REGISTER_SUCCESS);
//         });
//     });
//
// });