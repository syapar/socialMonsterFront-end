import React from 'react';
import { shallow } from 'enzyme';

import Root from '../Root';

const setup = () => {
    const store = {
        subscribe:jest.fn(),
        dispatch:jest.fn(),
        getState:jest.fn()
    };

    const component = shallow(
        <Root store={store} />
    );

    return {
        component
    }
};

describe('Root Component', () => {
    it('should render without crashing', () => {
        const { component } = setup();
        expect(component);
    })
});