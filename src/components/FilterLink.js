import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import * as PageTypes from '../constants/PageTypes';

const FilterLink = ({filter, children}) => (
    <Link
        exact
        to={`/${PageTypes.HOME}/${filter}`}
        activeStyle={{
            textDecoration:'none',
            color:'black'
        }}
    >
        {children}
    </Link>
);

export default FilterLink;
