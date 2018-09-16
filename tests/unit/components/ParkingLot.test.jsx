import React from 'react';
import { shallow } from 'enzyme';
import ParkingLots from '../../../src/components/ParkingLot'

describe('<ParkingLots />', () => {
    const defaultProps = {
        buses: [],
        selectedBusId: '1'
    }

    it('should render a bus.', () => {
        const component = shallow(<ParkingLots {...defaultProps} />)
        expect(component.find('div.parkinglots-container').length).toEqual(1)
    })
});
