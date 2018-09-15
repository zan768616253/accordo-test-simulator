import React from 'react';
import PropTypes from 'prop-types';

import ControlBase from './ControlBase'

const ControlButton = ({buttonClass, icon, moveFunc, x, y, direction}) => {
    return (
        <a
            className={buttonClass}
            onClick={() => { moveFunc({posX : x, posY: y, direction: direction}) }}
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
