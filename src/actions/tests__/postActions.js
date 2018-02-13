import * as postActions from '../postActions';
import * as ActionTypes from '../../constants/ActionTypes';
import { configureMockStore } from '../../utils/MockStore';


const setup = (initialState = {}) => {
    const mockStore = configureMockStore(initialState);

    return {
        mockStore,
    };
};

const baseState = () => ({
    post:{
        listByFilter:{
            all:{
                ids:[],
                isFetching:false,
                errorMessage:null,
            }
        }, socialAccounts:{
            data:{
                access_token: "12345",
                expires_in: 5184000,
                id: "10155153188445983",
                token_type: "bearer",
                type: "facebook"
            },
        }
    }
});

// describe('postActions',()=>{
//     it('should create ADD_POST_SUCCESS action when addPost is called', ()=>{
//         const { mockStore } = setup();
//
//         return mockStore.dispatch(postActions.addPost('postText','postTitle')).then(() => {
//             // return of async actions
//             expect(mockStore.getActions()[0].type).toEqual(ActionTypes.ADD_POST_SUCCESS);
//         });
//     });
//
//     it('should create FETCH_POSTS_REQUEST and FETCH_POSTS_SUCCESS  actions when fetchPosts is called', ()=>{
//         const { mockStore } = setup(baseState);
//
//         return mockStore.dispatch(postActions.fetchPosts('all')).then(() => {
//             const createdActions = mockStore.getActions();
//             expect(createdActions[0].type).toEqual(ActionTypes.FETCH_POSTS_REQUEST);
//             expect(createdActions[1].type).toEqual(ActionTypes.FETCH_POSTS_SUCCESS);
//         });
//     });
// });