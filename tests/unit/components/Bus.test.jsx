import React from 'react';
import { shallow } from 'enzyme';
import Bus from '../../../src/components/Bus';
import { DIR_WEST } from '../../../src/constants'

describe('<Bus />', () => {
    const defaultProps = {
        id: '1',
        direction: DIR_WEST,
        isActive: true
    }

    it('should render a empty parkinglot.', () => {
        const component = shallow(<Bus {...defaultProps} />)
        expect(component.find('div.bus').length).toEqual(1)
    })
});
