import React from 'react';
import { shallow} from 'enzyme';
import { NavLink as Link } from 'react-router-dom';

import FilterLink from '../FilterLink';
import * as PageTypes from '../../constants/PageTypes';

const setup = props => {
    const component = shallow(
        <FilterLink {...props} > { props.children } </FilterLink>
    );

    return {
        component,
        children: component.children().at(1),
    };
};

describe('FilterLink Component', () => {
    it('should have type is equal NavLink' , () => {
        const { component } = setup({children:''});

        expect(component.type()).toEqual( Link );
    });

    it('should render children' , () => {
        const { children } = setup({children:'testLink'});

        expect(children.text()).toEqual( 'testLink' );
    });

    it('should have `to` prop with home/filter value' , () => {
        const { component } = setup({
            children:'testLink',
            filter:'testFilter'
        });

        expect(component.prop('to')).toEqual(`/${PageTypes.HOME}/testFilter`);
    });


});
