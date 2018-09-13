import React from 'react';
import PropTypes from 'prop-types';

const ControlButton = ({type, moveFuc}) => {
    let icon, buttonClass
    switch(type) {
        case 'turnLeft':
            buttonClass = 'btn btn-turning'
            icon = <i className="fa fa-arrow-left" aria-hidden="true"/>
            break
        case 'turnRight':
            buttonClass = 'btn btn-turning'
            icon = <i className="fa fa-arrow-right" aria-hidden="true"/>
            break
        case 'stepFoward':
            buttonClass = 'btn btn-forward'
            icon = <i className="fa fa-step-forward" aria-hidden="true"/>
            break
        case 'place':
            buttonClass = 'btn btn-place'
            icon = <i className="fa fa-map-marker" aria-hidden="true"/>
            break
    }

    return (
        <a className={buttonClass}>
            {icon}
        </a>
    )
}


ControlButton.propTypes = {
    type: PropTypes.string,
    moveFuc: PropTypes.func
};

export default ControlButton;
