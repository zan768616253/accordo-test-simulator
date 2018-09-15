import React from 'react';
import { shallow } from 'enzyme';
import { ControlDropdownCom } from '../../../src/components/ControlDropdown';

describe('<ControlDropdownCom />', () => {
    const defaultProps = {
        type: 'busIndex'
    }

    it('should render a step forward button.', () => {
        const component = shallow(<ControlDropdownCom {...defaultProps} />)
        expect(component.find('div.dropdown').length).toEqual(1)
    })
});
