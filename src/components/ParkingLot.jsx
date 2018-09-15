import React from 'react';
import PropTypes from 'prop-types';

import Bus from './Bus'
import {PARKINGLOT_SIZE} from '../constants'

const ParkingLots = ({buses, selectedBusId}) => {
    const SIZE = PARKINGLOT_SIZE

    let blocks = []

    for (let i = 0; i < SIZE * SIZE; i++) {
        blocks[i] = null
    }
    for (let i = 0; i < buses.length; i++){
        const bus = buses[i]
        const busIndex = bus.posX + ((SIZE - 1 - bus.posY) * SIZE)
        blocks[busIndex] = bus
    }

    return (
        <div className='parkinglots-container'>
            <div className='block-wrapper'>
                {
                    blocks.map((block, i) => {
                        if (block) {
                            const isActive = block.id === selectedBusId ? true : false
                            return (<Bus key={i} id = {block.id} direction={block.direction} isActive={isActive}/>);
                        } else {
                            let blockClass = 'block' + ((i % SIZE === 0) ? ' boundary' : '')
                            return <div key={i} className={blockClass} />
                        }

                    })
                }
            </div>
        </div>
    )
}

ParkingLots.propTypes = {
    buses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        posX: PropTypes.number,
        posY: PropTypes.number,
        direction: PropTypes.string,
    })),
    selectedBusId: PropTypes.string,
};

export default ParkingLots;
