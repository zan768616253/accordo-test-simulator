import React from 'react';
import PropTypes from 'prop-types';

const ParkingLots = () => {
    const SIZE = 5

    const createParkingLots = () => {
        let blocks = []
        for (let i = 0; i < SIZE * SIZE; i++) {
            let blockClass = 'block' + ((i % SIZE === 0) ? ' boundary' : '')
            blocks.push(<div key={i} className={blockClass} />)
        }
        return blocks
    }

    return (
        <div className='parkinglots-container'>
            <div className='block-wrapper'>
                {createParkingLots()}
            </div>
        </div>
    )
}

ParkingLots.propTypes = {
};

export default ParkingLots;
