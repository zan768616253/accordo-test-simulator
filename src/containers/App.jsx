import React, { PureComponent } from 'react'

import ParkingLots from '../components/ParkingLot'
import ControlButton from '../components/ControlButton'
import ControlDropdown from '../components/ControlDropdown'


class App extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const positonOpt = [
            {
                value: 1,
                label: '1'
            },
            {
                value: 2,
                label: '2'
            },
            {
                value: 3,
                label: '3'
            },
            {
                value: 4,
                label: '4'
            },
            {
                value: 5,
                label: '5'
            },
        ]

        const directionOpt = [
            {
                value: 'NORTH',
                label: 'NORTH'
            },
            {
                value: 'EAST',
                label: 'EAST'
            },
            {
                value: 'SOUTH',
                label: 'SOUTH'
            },
            {
                value: 'West',
                label: 'West'
            }
        ]

        const defaultPositionOption = positonOpt[0]
        const defaultDirectionOption = directionOpt[0]

        function _onPositionSelect(type) {
        }

        function _onDirectionSelect(option) {
        }

        function _onBusSelect(option) {
        }

        return (
            <div className='main'>
                <div className='row row-5'>
                    <div className='flex-col'>
                        <ControlDropdown options={positonOpt} onChange={()=>{_onPositionSelect('X')}} value={defaultPositionOption} placeholder="Select X" />
                    </div>
                    <div className='flex-col'>
                        <ControlDropdown options={positonOpt} onChange={()=>{_onPositionSelect('Y')}} value={defaultPositionOption} placeholder="Select Y" />
                    </div>
                    <div className='flex-col'>
                        <ControlDropdown options={directionOpt} onChange={_onBusSelect} value={defaultDirectionOption} placeholder="Select direction" />
                    </div>
                    <div className='flex-col'>
                        <ControlButton
                            type='place'
                        />
                    </div>
                    <div className='flex-col'>
                        <ControlDropdown options={positonOpt} onChange={_onBusSelect} value={defaultPositionOption} placeholder="Select direction" />
                    </div>
                </div>
                <div className='row row-3'>
                    <div className='flex-col'>
                        <ControlButton
                            type='turnLeft'
                        />
                    </div>
                    <div className='flex-col'>
                        <ParkingLots />
                    </div>
                    <div className='flex-col'>
                        <ControlButton
                            type='turnRight'
                        />
                    </div>
                </div>
                <div className='row row-1'>
                    <ControlButton
                        type='stepFoward'
                    />
                </div>
            </div>
        )
    }
}

export default App
