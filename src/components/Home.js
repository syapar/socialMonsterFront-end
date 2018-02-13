import React from 'react';
import PostList from '../containers/PostList';
import FilterLinkList from './FilterLinkList';

const Home = () => (
    <div>
        <FilterLinkList/>
        <PostList/>
    </div>
);

export default Home;