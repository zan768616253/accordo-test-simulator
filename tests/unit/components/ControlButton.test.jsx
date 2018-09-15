import React from 'react';
import { shallow } from 'enzyme';
import { ControlButtonCom } from '../../../src/components/ControlButton';

describe('<ControlButton />', () => {
    const defaultProps = {
        type: 'place'
    }

    it('should render a step forward button.', () => {
        const component = shallow(<ControlButtonCom {...defaultProps} />)
        expect(component.find('a').length).toEqual(1)
    })
});
