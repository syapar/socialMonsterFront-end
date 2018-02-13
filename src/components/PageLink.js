import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import * as PageTypes from '../constants/PageTypes';

const PageLink = ({ page, children }) => (
    <Link
        exact
        to={`/${page === PageTypes.HOME ? '' : page}`}
        activeStyle={{
            textDecoration:'none',
            color:'black'
        }}
    >
        {children}
    </Link>
);

export default PageLink;