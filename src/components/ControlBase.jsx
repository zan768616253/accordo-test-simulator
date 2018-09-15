import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { placeNewBus, moveExistingBus, selectBus, setControlX, setControlY, setControlDirection } from '../actions'
import { DIR_ALL } from '../constants'

const ControlBase = (WrappedComponent, mapStateToProps) => {
    class BusController extends PureComponent {
        constructor(props) {
            super(props)
            this.onCreateNewBus = this.onCreateNewBus.bind(this)
            this.onMoveBus = this.onMoveBus.bind(this)
            this.onTurnBus = this.onTurnBus.bind(this)
            this.onSetX = this.onSetX.bind(this)
            this.onSetY = this.onSetY.bind(this)
        }

        onCreateNewBus() {
            const { createNewBus, posX, posY, direction } = this.props
            return createNewBus({ posX, posY, direction })
        }

        onMoveBus(isForward) {
        }

        onTurnBus(isClockwise) {
        }

        onSetX(value) {
            const { setX } = this.props
            return setX(value)
        }

        onSetY(value) {
            const { setY } = this.props
            return setY(value)
        }

        onSetDirection(value) {
            const { setDirection } = this.props
            return setDirection(value)
        }

        render() {
            const self = this
            const { controlType, type } = this.props
            if (controlType === 'Button') {
                let icon, buttonClass, moveFunc
                switch(type) {
                    case 'turnLeft':
                        buttonClass = 'btn btn-turning'
                        icon = <i className="fa fa-arrow-left" aria-hidden="true"/>
                        moveFunc = this.onMoveBus
                        break
                    case 'turnRight':
                        buttonClass = 'btn btn-turning'
                        icon = <i className="fa fa-arrow-right" aria-hidden="true"/>
                        moveFunc = this.onMoveBus
                        break
                    case 'stepFoward':
                        buttonClass = 'btn btn-forward'
                        icon = <i className="fa fa-step-forward" aria-hidden="true"/>
                        moveFunc = this.onMoveBus
                        break
                    case 'place':
                        buttonClass = 'btn btn-place'
                        icon = <i className="fa fa-map-marker" aria-hidden="true"/>
                        moveFunc = this.onCreateNewBus
                        break
                }

                return (<WrappedComponent
                    {...this.props}
                    buttonClass = {buttonClass}
                    icon = {icon}
                    moveFunc = {moveFunc}
                />)
            } else if (controlType === 'Dropdown') {
                const {buses, posX, posY, direction, selectedBusId} = this.props

                let options, onChange, value, placeholder

                const positonOpt = [1, 2, 3, 4, 5].map(num => {
                    return {
                        value: num,
                        label: num
                    }
                })

                const directionOpt = DIR_ALL.map((direction) => {
                    return {
                        value: direction,
                        label: direction
                    }
                })

                function _onPositionSelect(type, option) {
                    switch (type) {
                        case 'X':
                            return self.onSetX(option.value)
                        case 'Y':
                            return self.onSetY(option.value)
                    }
                }

                function _onDirectionSelect(option) {
                    return self.onSetDirection(option.value)
                }

                function _onBusSelect(option) {
                }

                switch(type) {
                    case 'posX':
                        options = positonOpt
                        onChange = (option) => {_onPositionSelect('X', option)}
                        value = posX.toString()
                        break
                    case 'posY':
                        options = positonOpt
                        onChange = (option) => {_onPositionSelect('Y', option)}
                        value = posY.toString()
                        break
                    case 'direction':
                        options = directionOpt
                        onChange = _onDirectionSelect
                        value = direction
                        break
                    case 'busIndex':
                        options = (new Array(buses.length)).map((item, index) => {
                            return {
                                value: index,
                                label: index
                            }
                        })
                        onChange = _onBusSelect
                        value = selectedBusId > 0 ? selectedBusId.toString() : null
                        placeholder="Select bus"
                        break
                }

                return (<WrappedComponent
                    {...this.props}
                    options = {options}
                    onChange = {onChange}
                    value = {value}
                    placeholder = {placeholder}
                />)
            }
        }
    }

    BusController.propTypes = {
        createNewBus: PropTypes.func,
        moveBus: PropTypes.func,
        controlX: PropTypes.number,
        controlY: PropTypes.number,
        controlDirection: PropTypes.string
    }

    const defualtMapStateToProps = state => ({
        ...mapStateToProps(state),
        buses: state.buses,
        selectedBusId: state.selectedBusId,
        posX: state.controlX,
        posY: state.controlY,
        direction: state.controlDirection
    })

    const mapDispatchToProps = dispatch => ({
        createNewBus(position) {
            return dispatch(placeNewBus(position))
        },
        moveBus(position, busId) {
            return dispatch(moveExistingBus(position, busId))
        },
        setX(x) {
            return dispatch(setControlX(x))
        },
        setY(y) {
            return dispatch(setControlY(y))
        },
        setDirection(direction) {
            return dispatch(setControlDirection(direction))
        }
    })
    return connect(defualtMapStateToProps, mapDispatchToProps)(BusController)
}

export default ControlBase