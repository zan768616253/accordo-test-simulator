import {
    CREATE_NEW_BUS,
    SET_CONTROL_X,
    SET_CONTROL_Y,
    SET_CONTROL_DIRECTION, SET_SELECTED_BUS, SET_BUS_POSITION, SET_REPORT,
} from '../../../src/actions'
import { DIR_NORTH, DIR_WEST } from '../../../src/constants'
import Reducer, { DEFAULT_STATE } from '../../../src/reducers'
import TEST_BUSES from '../../data/buses'

describe('Reducers', () => {
    let initialState = DEFAULT_STATE;

    afterEach(() => {
        initialState = DEFAULT_STATE;
    });

    it('handles action CREATE_NEW_BUS', () => {
        const action = {
            type: CREATE_NEW_BUS,
            newBus: TEST_BUSES.NEW_BUS,
        }

        const state = Reducer({
            ...initialState,
            buses: [TEST_BUSES.BUS_1, TEST_BUSES.BUS_2],
        }, action)

        expect(state.buses[state.buses.length - 1])
            .toEqual(jasmine.objectContaining(TEST_BUSES.NEW_BUS))
    })

    it('handles action SET_CONTROL_X', () => {
        const action = {
            type: SET_CONTROL_X,
            value: 5
        }
        const state = Reducer({
            ...initialState
        }, action)

        expect(state.controlX).toEqual(action.value)
    })

    it('handles action SET_CONTROL_Y', () => {
        const action = {
            type: SET_CONTROL_Y,
            value: 5
        }
        const state = Reducer({
            ...initialState
        }, action)

        expect(state.controlY).toEqual(action.value)
    })

    it('handles action SET_CONTROL_DIRECTION', () => {
        const action = {
            type: SET_CONTROL_DIRECTION,
            value: DIR_WEST
        }
        const state = Reducer({
            ...initialState
        }, action)

        expect(state.controlDirection).toEqual(action.value)
    })

    it('handles action SET_SELECTED_BUS', () => {
        const action = {
            type: SET_SELECTED_BUS,
            busId: '1'
        }
        const state = Reducer({
            ...initialState
        }, action)

        expect(state.selectedBusId).toEqual(action.busId)
    })

    it('handles action SET_BUS_POSITION', () => {
        const newPosition = {
            posX: 1,
            posY: 2,
            direction: DIR_NORTH,
        }
        const action = {
            type: SET_BUS_POSITION,
            busId: '1',
            newPosition: newPosition
        }

        const state = Reducer({
            ...initialState,
            buses: [TEST_BUSES.BUS_1],
        }, action)

        expect(state.buses[0].posY).toEqual(newPosition.posY)
    })

    it('handles action SET_REPORT', () => {
        const message = 'test message'
        const action = {
            type: SET_REPORT,
            message: message
        }
        const state = Reducer({
            ...initialState
        }, action)

        expect(state.report).toEqual(message)
    })
})
