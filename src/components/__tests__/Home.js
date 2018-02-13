import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home';
import PostList from '../../containers/PostList';
import FilterLinkList from '../FilterLinkList';

const setup = () => {
    const component = shallow(
        <Home/>
    );

    return {
        component
    };
};

describe('Home Component', () => {
    it('should render Filter Link List', () => {
        const { component } = setup();

        expect(component.find(FilterLinkList)).toHaveLength(1);
    });
    it('should render Post List', () => {
        const { component } = setup();

        expect(component.find(PostList)).toHaveLength(1);
    });
});