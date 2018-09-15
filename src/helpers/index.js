import _ from 'lodash'
import {PARKINGLOT_SIZE, DIR_NORTH, DIR_EAST, DIR_SOUTH, DIR_WEST, DIR_ALL} from '../constants'

export const busExists = (newPosition, existingBuses) => {
    for (let i = 0; i < existingBuses.length; i++) {
        const bus = existingBuses[i];
        if (newPosition.posX === bus.posX
            && newPosition.posY === bus.posY) {
            return true;
        }
    }
    return false;
}

export const positionValid = (newPosition) => {
    if (newPosition.posX <= PARKINGLOT_SIZE
        && newPosition.posY <= PARKINGLOT_SIZE && newPosition.posX > 0 && newPosition.posY > 0) {
        return true;
    } else {
        return false
    }
}

export const busStepForward = (bus) => {
    const newPosition = _.cloneDeep(bus)
    const direction = newPosition.direction
    switch (direction) {
        case DIR_NORTH:
            newPosition.posY = newPosition.posY - 1
            break
        case DIR_SOUTH:
            newPosition.posY = newPosition.posY + 1
            break
        case DIR_WEST:
            newPosition.posX = newPosition.posX - 1
            break
        case DIR_EAST:
            newPosition.posX = newPosition.posX + 1
            break
    }
    return newPosition
}

export const rotateBus = (bus, isClockwise) => {
    const newPosition = _.cloneDeep(bus)
    let index = null;
    DIR_ALL.forEach((dir, i) => {
        if (dir === newPosition.direction) {
            index = i;
        }
    })
    if (isClockwise) {
        newPosition.direction = DIR_ALL[(index + 1) % DIR_ALL.length]
    } else {
        newPosition.direction = DIR_ALL[((index + DIR_ALL.length) - 1) % DIR_ALL.length]
    }
    return newPosition
}
