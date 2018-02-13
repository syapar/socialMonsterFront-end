import React from 'react';
import { shallow } from 'enzyme';

import Error from '../Error';

const setup = props => {
    const actions = {
        onRetry:jest.fn(),
    };

    const component = shallow(
        <Error {...props} {...actions} />
    );

    return {
        component,
        actions,
        buttons: component.find('button'),
    }
};

describe('Error Component', () => {
    it('should have `p` and `button` elements', () => {
        const { component } = setup();
        expect(component.find('p')).toHaveLength(1);
        expect(component.find('button')).toHaveLength(1);
    });

    it('should render message', () => {
        const { component } = setup({message:'ErrorTEST'});
        expect(component.find('p').text()).toMatch('ErrorTEST');
    });

    it('should call action on first button clicked', () => {
        const { buttons, actions } = setup();
        buttons.at(0).simulate('click');
        expect(actions.onRetry).toBeCalled();
    });
});