import React from 'react';
import { shallow } from 'enzyme';
import { AppCom } from '../../../src/containers/App';

describe('<App />', () => {
    const defaultProps = {
        buses: [],
        selectedBusId: '',
        parkSize: 5
    };

    it('should render a app page.', () => {
        const component = shallow(<AppCom {...defaultProps} />)
        expect(component.find('div.main').length).toEqual(1)
    });
});
