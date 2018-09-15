import React from 'react';
import PropTypes from 'prop-types';

import * as CONSTANTS from '../constants';

const Bus = ({ id, direction, isActive }) => {
    const domClass = 'bus' + (isActive ? ' active' : '')
    const index = (CONSTANTS.DIR_ALL.indexOf(direction) >= 0) ?
        CONSTANTS.DIR_ALL.indexOf(direction) : 0;
    const rotate = 'fa-rotate-' + index * 90


    return (<div className={domClass}>
        <div className='bus-content' >
            <div className='bus-wrapper'>
                <span className={'bus-id'} >{id}</span>
                <i className={"fa fa-bus " + rotate} aria-hidden="true" />
            </div>
        </div>
    </div>);
};

Bus.propTypes = {
    id: PropTypes.string,
    direction: PropTypes.string,
    isActive: PropTypes.bool
};

export default Bus;
