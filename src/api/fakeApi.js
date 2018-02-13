import uuidv4 from 'uuid/v4';
import * as FilterTypes from '../constants/FilterTypes';

const fakeDatabase = {
    posts:[{
        id: '12345',
        title: 'ttt111',
        text: 'hey',
        type: 'facebook',
    },{
        id: uuidv4(),
        title: 'ttt222',
        text: 'ho',
        type: 'facebook',
    },{
        id: uuidv4(),
        title: 'ttt3333',
        text: 'let`s go',
        type: 'facebook',
    }],
    users:[{
        uid: '12345',
        name: 'serhat yapar',
        picture: 'profileImage.jpg',
    }]
};

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve,ms));

export const fetchPosts = (filter) =>
    delay(500).then(() => {
        // if(Math.random() > 0.5) {
        //     throw new Error('Boom!');
        // }

        switch (filter){
            case FilterTypes.ALL:
                return fakeDatabase.posts;
            case FilterTypes.FACEBOOK:
            case FilterTypes.TWITTER:
            case FilterTypes.INSTAGRAM:
                return fakeDatabase.posts.filter(t => t.type===filter);
            default:
                return new Error(`Unknown filter: ${filter}`);
        }
    });

export const addPost = (text,title) =>
    delay(500).then(() => {
        const post = {
            id: uuidv4(),
            text,
            title,
            seen: false,
        };
        fakeDatabase.posts.push(post);
        return post;
    });

export const togglePost = (id) =>
    delay(500).then(() => {
        // const post = fakeDatabase.posts.find(f => f.id === id);
        // post.seen = !post.seen;
        // return post;
    });


export const register = (id) =>
    delay(500).then(() => {
        const user=fakeDatabase.users.find(u => u.uid === id);
        if(user){
            return user;
        }else{
            throw new Error(`Unknown user: ${id}`);
        }
    });