import { DIR_NORTH, DIR_EAST, DIR_SOUTH, DIR_WEST } from '../../src/constants'

const buses = {
    BUS_1: {
        id: '1',
        posX: 1,
        posY: 1,
        direction: DIR_NORTH,
    },
    BUS_1_MOVE: {
        id: '1',
        posX: 2,
        posY: 1,
        direction: DIR_NORTH,
    },
    BUS_1_TURN: {
        id: '1',
        posX: 1,
        posY: 1,
        direction: DIR_EAST,
    },
    BUS_2: {
        id: '2',
        posX: 5,
        posY: 1,
        direction: DIR_EAST,
    },
    BUS_3: {
        id: '3',
        posX: 1,
        posY: 5,
        direction: DIR_SOUTH,
    },
    BUS_4: {
        id: '4',
        posX: 5,
        posY: 5,
        direction: DIR_WEST,
    },
    NEW_BUS: {
        posX: 3,
        posY: 3,
        direction: DIR_WEST,
    },
    NEW_BUS_OUT_X: {
        posX: 200,
        posY: 3,
        direction: DIR_WEST,
    },
    NEW_BUS_OUT_Y: {
        posX: 3,
        posY: 200,
        direction: DIR_WEST,
    },
    NEW_BUS_EXIST: {
        posX: 1,
        posY: 1,
        direction: DIR_WEST,
    },
    NEW_BUS_ERROR: {
        posX: 1,
        posY: 3,
        direction: 'wrong direction',
    },
}

export default buses
