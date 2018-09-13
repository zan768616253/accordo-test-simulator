import React from 'react';
import { shallow } from 'enzyme';
import App from '../../../src/containers/App';

describe('<App />', () => {
    const defaultProps = {
    };

    it('should render a app page.', () => {
        const component = shallow(<App {...defaultProps} />);
    });
});
