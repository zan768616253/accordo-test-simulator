import {
    busExists,
    positionValid,
    busStepForward,
    rotateBus
} from '../../../src/helpers'

import {DIR_EAST, DIR_SOUTH} from '../../../src/constants'

describe('Helpers', () => {

    it('detect bus existing', () => {
        const newPosition = {
            posX: 5,
            posY: 5
        }
        const existingBuses = [{
            posX: 5,
            posY: 5
        }]
        expect(busExists(newPosition, existingBuses))
            .toEqual(true)
    })

    it('detect the position is not valid', () => {
        const newPosition = {
            posX: 5,
            posY: 6
        }

        expect(positionValid(newPosition))
            .toEqual(false)
    })

    it('should move bus one step forward', () => {
        const bus = {
            posX: 1,
            posY: 1,
            direction: DIR_EAST
        }

        expect(busStepForward(bus))
            .toEqual({
                posX: 2,
                posY: 1,
                direction: DIR_EAST
            })
    })


    it('should rotate the bus', () => {
        const bus = {
            posX: 1,
            posY: 1,
            direction: DIR_EAST
        }

        expect(rotateBus(bus, true))
            .toEqual({
                posX: 1,
                posY: 1,
                direction: DIR_SOUTH
            })
    })
})
