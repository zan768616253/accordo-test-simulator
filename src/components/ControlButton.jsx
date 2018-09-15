import React from 'react';
import PropTypes from 'prop-types';

import ControlBase from './ControlBase'

const ControlButton = ({buttonClass, icon, moveFunc}) => {
    return (
        <a
            className={buttonClass}
            onClick={() => { moveFunc() }}
        >
            {icon}
        </a>
    )
}

ControlButton.propTypes = {
    type: PropTypes.string
}

const mapStateToProps = () => ({
    controlType: 'Button'
})

export { ControlButton as ControlButtonCom }
export default ControlBase(ControlButton, mapStateToProps);
