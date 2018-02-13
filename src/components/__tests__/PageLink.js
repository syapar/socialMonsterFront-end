import React from 'react';
import { shallow} from 'enzyme';
import { NavLink as Link } from 'react-router-dom';

import PageLink from '../PageLink';
import * as PageTypes from '../../constants/PageTypes';

const setup = props => {

    const component = shallow(
        <PageLink {...props} > { props.children } </PageLink>
    );

    return {
        component,
        children: component.children().at(1),
    };
};

describe('PageLink Component', () => {
    it('should have type is equal NavLink' , () => {
        const { component } = setup({children:''});

        expect(component.type()).toEqual( Link );
    });

    it('should render children' , () => {
        const { children } = setup({children:'testLink'});

        expect(children.text()).toEqual( 'testLink' );
    });

    it('should have `to` prop based on `page` property' , () => {
        const { component } = setup({
            children:'testLink',
            page:'testPage'
        });

        expect(component.prop('to')).toEqual(`/testPage`);
    });

    describe('when `page` prop is equal Home', () =>{
        it('should have `to` prop is equal `/`' , () => {
            const { component } = setup({
                children:'testLink',
                page:PageTypes.HOME
            });

            expect(component.prop('to')).toEqual(`/`);
        });
    });
});
