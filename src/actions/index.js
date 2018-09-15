import _ from 'lodash'
import {busExists, positionValid} from '../helpers'

export const CREATE_NEW_BUS = 'CREATE_NEW_BUS'
export const SET_SELECTED_BUS = 'SET_SELECTED_BUS'
export const SET_CONTROL_X = 'SET_CONTROL_X'
export const SET_CONTROL_Y = 'SET_CONTROL_Y'
export const SET_CONTROL_DIRECTION = 'SET_CONTROL_DIRECTION'
export const SET_BUS_POSITION = 'SET_BUS_POSITION'
export const SET_REPORT = 'SET_REPORT'

export const createNewBus = position => ({
    type: CREATE_NEW_BUS,
    newBus: position
});

export const setSelectedBusId = busId => ({
    type: SET_SELECTED_BUS,
    busId
})

export const setControlX = (X) => ({
    type: SET_CONTROL_X,
    value: X
})

export const setControlY = (Y) => ({
    type: SET_CONTROL_Y,
    value: Y
})

export const setControlDirection = (direction) => ({
    type: SET_CONTROL_DIRECTION,
    value: direction
})

export const setBusPosition = (id, position) => ({
    type: SET_BUS_POSITION,
    newPosition: position,
    busId: id,
})

export const setReport = message => ({
    type: SET_REPORT,
    message,
})

export const selectBus = busId => (dispatch, getState) => {
    let selectedBusId;
    const { buses } = getState()
    if (buses.length === 0) {
        selectedBusId = null
    } else {
        const selectedBus = buses.find((bus, i) =>
            (bus.id === busId || i === buses.length - 1))
        selectedBusId = selectedBus.id
    }
    dispatch(setSelectedBusId(selectedBusId))
}

export const placeNewBus = (position) => (dispatch, getState) => {
    const { buses } = getState()
    const isExist = busExists(position, buses)
    if (!isExist) {
        dispatch(createNewBus(position))
        dispatch(selectBus())
    }
}

export const moveExistingBus = (id, position) => (dispatch, getState) => {
    const { buses } = getState()
    const isExist = busExists(position, buses)
    const isPositionValid = positionValid(position)

    if (!isExist && isPositionValid) {
        dispatch(setBusPosition(id, position))
    }
}

export const turnExistingBus = (id, direction) => (dispatch, getState) => {
    const { buses } = getState()
    const oldDirection = buses.find(b => {
        return b.id === id
    })
    const newDirection = _.cloneDeep(oldDirection)
    newDirection.direction = direction
    dispatch(setBusPosition(id, newDirection))
}
