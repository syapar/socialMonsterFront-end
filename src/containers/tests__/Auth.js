import React from 'react';
import { shallow } from 'enzyme';

import Auth from '../Auth';

const setup = () => {
    const component = shallow(
        <Auth/>
    );

    const formControls = component.find('FormControl');
    const emailText = formControls.filter({type:'email'});
    const passwordText = formControls.filter({type:'password'})

    return {
        component,
        emailText,
        passwordText
    };
};
//
// describe('Auth Component', () => {
//     it('should render `email` input', () => {
//         const { emailText } = setup();
//
//         expect(emailText.prop('autoFocus')).toEqual(true);
//     });
//     it('should render `password` input', () => {
//         const { passwordText } = setup();
//
//         expect(passwordText).toHaveLength(1);
//     });
// });