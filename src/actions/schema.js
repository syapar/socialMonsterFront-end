import { schema } from 'normalizr';

export const posts = new schema.Entity('posts');
export const arrayOfPosts = new schema.Array(posts);

export const user = new schema.Entity('users',{},{ idAttribute: 'uid' });