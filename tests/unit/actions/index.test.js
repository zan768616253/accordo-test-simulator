import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
    CREATE_NEW_BUS, SET_SELECTED_BUS, MOVE_EXISTING_BUS, SET_CONTROL_X, SET_CONTROL_Y, SET_CONTROL_DIRECTION,
    moveExistingBus, placeNewBus, selectBus, setControlX, setControlY, setSelectedBusId, setControlDirection
} from '../../../src/actions'
import TEST_BUSES from '../../data/buses'

describe('Action', () => {
    const mockStore = configureStore([thunk])

    it('should set selected bus id', () => {
        const initialState = {
            selectedBusId: 1
        }
        const store = mockStore(initialState);
        store.dispatch(setSelectedBusId(2));
        const expectedActions = [{
            type: SET_SELECTED_BUS,
            busId: 2
        }];
        expect(store.getActions()).toEqual(expectedActions);
    })

    it('should set X', () => {
        const initialState = {
            controlX: 1
        }
        const store = mockStore(initialState);
        store.dispatch(setControlX(2));
        const expectedActions = [{
            type: SET_CONTROL_X,
            value: 2
        }];
        expect(store.getActions()).toEqual(expectedActions);
    })

    it('should set Y', () => {
        const initialState = {
            controlY: 1
        }
        const store = mockStore(initialState);
        store.dispatch(setControlY(2));
        const expectedActions = [{
            type: SET_CONTROL_Y,
            value: 2
        }];
        expect(store.getActions()).toEqual(expectedActions);
    })

    it('should set Direction', () => {
        const initialState = {
            controlDirection: 'NORTH'
        }
        const store = mockStore(initialState);
        store.dispatch(setControlDirection('WEST'));
        const expectedActions = [{
            type: SET_CONTROL_DIRECTION,
            value: 'WEST'
        }];
        expect(store.getActions()).toEqual(expectedActions);
    })

    it('should set the last bus id as selectedBusId if set undefined', () => {
        const busId = TEST_BUSES.BUS_2.id;
        const initialState = {
            buses: [TEST_BUSES.BUS_1, TEST_BUSES.BUS_2]
        }
        const store = mockStore(initialState);
        store.dispatch(selectBus());
        const expectedActions = [{
            type: SET_SELECTED_BUS,
            busId
        }];
        expect(store.getActions()).toEqual(expectedActions);
    })

    it('should place a new bus.', () => {
        const initialState = {
            buses: [TEST_BUSES.BUS_1, TEST_BUSES.BUS_2]
        }
        const newPosition = TEST_BUSES.NEW_BUS
        const store = mockStore(initialState)
        store.dispatch(placeNewBus(newPosition))

        // TODO As the reducer not works here,
        // the bus is not really inserted, so the busId still is the 4th one.

        const expectedActions = [{
            type: CREATE_NEW_BUS,
            newBus: newPosition,
        }, {
            type: SET_SELECTED_BUS,
            busId: TEST_BUSES.BUS_2.id,
        }]
        expect(store.getActions()).toEqual(expectedActions)
    })
})
