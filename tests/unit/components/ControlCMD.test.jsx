import React from 'react';
import { shallow } from 'enzyme';
import {ControlCMDCom} from '../../../src/components/ControlCMD'

describe('<ControlCMDCom />', () => {
    const defaultProps = {
    }

    it('should render a command pannel.', () => {
        const component = shallow(<ControlCMDCom {...defaultProps} />)
        expect(component.find('div.thick-row').length).toEqual(1)
    })
});
