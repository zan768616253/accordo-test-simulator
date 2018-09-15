import React from 'react';
import PropTypes from 'prop-types';

import Bus from './Bus'

const ParkingLots = ({buses, selectedBusId}) => {
    const SIZE = 5

    let blocks = []

    for (let i = 0; i < SIZE * SIZE; i++) {
        blocks[i] = null
    }
    for (let i = 0; i < buses.length; i++){
        const bus = buses[i]
        const busIndex = bus.posX - 1 + (bus.posY -1 ) * SIZE
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
