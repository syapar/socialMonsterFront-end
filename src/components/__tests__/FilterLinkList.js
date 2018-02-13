import React from 'react';
import { shallow } from 'enzyme';

import FilterLinkList from '../FilterLinkList';
import * as FilterTypes from '../../constants/FilterTypes';

const setup = () => {
    const component = shallow (
        <FilterLinkList />
    );

    return {
        component,
    };
};

describe('FilterLinkList Component',() => {
    it('should render FilterLink for `all` Filter', () => {
        const { component } =  setup();

        expect( component.find({ filter: FilterTypes.ALL }) ).toHaveLength(1);
    });

    it('should render FilterLink for `facebook` Filter', () => {
        const { component } =  setup();

        expect( component.find({ filter: FilterTypes.FACEBOOK }) ).toHaveLength(1);
    });

    it('should render FilterLink for `twitter` Filter', () => {
        const { component } =  setup();

        expect( component.find({ filter: FilterTypes.TWITTER }) ).toHaveLength(1);
    });

    it('should render FilterLink for `instagram` Filter', () => {
        const { component } =  setup();

        expect( component.find({ filter: FilterTypes.INSTAGRAM }) ).toHaveLength(1);
    });
});
