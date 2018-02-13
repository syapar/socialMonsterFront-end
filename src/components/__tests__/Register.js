import React from 'react';
import { shallow } from 'enzyme';

import Register from '../Register';
import RegisterFrom from '../../containers/RegisterFrom';

const setup = () => {
    const component = shallow(
        <Register/>
    );

    return {
        component
    };
};

describe('Register Component', () => {
    it('should render `Register Page` text', () => {
        const { component } = setup();

        expect(component.contains(<p>Register Page</p>)).toEqual(true);
    });

    it('should render RegisterForm Component', () => {
        const { component } = setup();

        expect(component.find(RegisterFrom)).toHaveLength(1);
    });
});