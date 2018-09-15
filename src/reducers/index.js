import _ from 'lodash'

import {CREATE_NEW_BUS, SET_SELECTED_BUS, SET_BUS_POSITION, SET_CONTROL_X, SET_CONTROL_Y, SET_CONTROL_DIRECTION, SET_REPORT} from '../actions';

export const DEFAULT_STATE = {
    buses: [],
    selectedBusId: null,
    controlX: 0,
    controlY: 0,
    controlDirection: 'NORTH',
    report: ''
}

export default (state = DEFAULT_STATE, action) => {
    let newState = _.cloneDeep(state)
    switch (action.type) {
        case CREATE_NEW_BUS:
            newState.buses.push({
                id: newState.buses.length + 1,
                ...action.newBus
            })
            return newState
        case SET_CONTROL_X:
            newState.controlX = action.value
            return newState
        case SET_CONTROL_Y:
            newState.controlY = action.value
            return newState
        case SET_CONTROL_DIRECTION:
            newState.controlDirection = action.value
            return newState
        case SET_BUS_POSITION:
            const {busId, newPosition} = action
            const buses = state.buses.map(bus => {
                return bus.id === busId ? newPosition : bus
            })
            newState.buses = buses
            return newState
        case SET_SELECTED_BUS:
            newState.selectedBusId = action.busId
            return newState
        case SET_REPORT:
            newState.report = action.message
            return newState
        default:
            return state
    }
}
