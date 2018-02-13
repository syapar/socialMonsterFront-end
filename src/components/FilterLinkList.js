import React from 'react';
import FilterLink from './FilterLink';
import * as FilterTypes from '../constants/FilterTypes';

const FilterLinkList = () => (
    <div>
        <FilterLink filter={FilterTypes.ALL}>
            All
        </FilterLink>
        {' '}
        <FilterLink filter={FilterTypes.FACEBOOK}>
            Facebook
        </FilterLink>
        {' '}
        <FilterLink filter={FilterTypes.TWITTER}>
            Twitter
        </FilterLink>
        {' '}
        <FilterLink filter={FilterTypes.INSTAGRAM}>
            Instagram
        </FilterLink>
    </div>
);

export default FilterLinkList;