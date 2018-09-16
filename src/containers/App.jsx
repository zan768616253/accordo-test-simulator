import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ParkingLots from '../components/ParkingLot'
import ControlButton from '../components/ControlButton'
import ControlDropdown from '../components/ControlDropdown'
import ControlCMD from '../components/ControlCMD'

class App extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        const {buses, selectedBusId} = this.props

        return (
            <div className='main'>
                <div className='row row-5'>
                    <div className='flex-col'>
                        <span>X:</span>
                        <ControlDropdown type='posX' />
                    </div>
                    <div className='flex-col'>
                        <span>Y:</span>
                        <ControlDropdown type='posY' />
                    </div>
                    <div className='flex-col'>
                        <span>D:</span>
                        <ControlDropdown type='direction' />
                    </div>
                    <div className='flex-col'>
                        <span>Place</span>
                        <ControlButton
                            type='place'
                        />
                    </div>
                    <div className='flex-col'>
                        <ControlDropdown type='busIndex' />
                    </div>
                </div>
                <div className='row row-3'>
                    <div className='flex-col'>
                        <ControlButton
                            type='turnLeft'
                        />
                    </div>
                    <div className='flex-col'>
                        <ParkingLots buses={buses} selectedBusId={selectedBusId} />
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
                <ControlCMD />
            </div>
        )
    }
}

App.propTypes = {
    buses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        posX: PropTypes.number,
        posY: PropTypes.number,
        direction: PropTypes.string,
    })),
    selectedBusId: PropTypes.string,
    notification: PropTypes.string,
}

/* istanbul ignore next */
const mapStateToProps = state => ({
    buses: state.buses,
    selectedBusId: state.selectedBusId
})

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
})

export { App as AppCom }
export default connect(mapStateToProps, mapDispatchToProps)(App)
