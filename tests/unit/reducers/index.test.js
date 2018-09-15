import {CREATE_NEW_BUS, SET_SELECTED_BUS, MOVE_EXISTING_BUS, SET_CONTROL_X, SET_CONTROL_Y} from '../../../src/actions'
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
})
