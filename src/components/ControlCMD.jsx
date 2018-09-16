import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

import ControlBase from './ControlBase'
import {CMD_PLACE, CMD_TURN_LEFT, CMD_TURN_RIGHT, CMD_MOVE_FARWARD, CMD_REPORT} from '../constants'

class ControlCMD extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            cmds: ''
        }
        this.onUploadFile = this.onUploadFile.bind(this)
        this.onParseCmds = this.onParseCmds.bind(this)
    }

    onUploadFile(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = (e) => {
                const cmds = e.target.result;
                this.cmdInputDom.value = cmds;
                this.setState({ cmds });
                this.fileUploadDom.value = '';
            };
            reader.readAsText(file);
        }
    }

    onParseCmds() {
        const { onCreateNewBusWithPosition, onTurnBusRight, onTurnBusLeft, onMoveBus, onPickBus, onUpdateReport } = this.props;
        let cmdsPromise = Promise.resolve(onUpdateReport(true));

        const { cmds } = this.state;
        const cmdArray = cmds.toUpperCase().split('\n');
        cmdArray.forEach((cmd) => {

            cmdsPromise = cmdsPromise.then(() => {
                const cmdKeys = cmd.split(' ');
                const cmdType = cmdKeys[0];
                const cmdArgs = cmdKeys[1] ? cmdKeys[1].split(',') : [];
                switch (cmdType) {
                    case CMD_PLACE:
                        if (cmdArgs.length > 2) {
                            return onCreateNewBusWithPosition(parseInt(cmdArgs[0], 10), parseInt(cmdArgs[1], 10), cmdArgs[2]);
                        }
                        return Promise.resolve()
                    case CMD_TURN_LEFT:
                        return onTurnBusLeft()
                    case CMD_TURN_RIGHT:
                        return onTurnBusRight()
                    case CMD_MOVE_FARWARD:
                        return onMoveBus(true)
                    case CMD_REPORT:
                        return onUpdateReport()
                    default:
                        return Promise.resolve()
                }
            })
        })
        cmdsPromise.then(() => onPickBus(null))
    }

    render() {
        const { report } = this.props;
        return (
            <div className='row row-4 thick-row'>
                <div className='flex-col'>
                    <textarea
                        ref={(ele) => { this.cmdInputDom = ele; }}
                        id={'cmd-input'}
                        onChange={(e) => { this.setState({ cmds: e.target.value })}}
                        placeholder='This is cimmand area'
                    />
                </div>
                <div className='flex-col'>
                    <div className="upload-btn-wrapper">
                        <button className="upload-btn">Upload a file</button>
                        <input
                            ref={(ele) => { this.fileUploadDom = ele }}
                            onChange={this.onUploadFile}
                            type="file"
                        />
                    </div>
                </div>
                <div className='flex-col'>
                    <div className="upload-btn-wrapper">
                        <button
                            className='go-btn'
                            id="cmd-exec"
                            onClick={this.onParseCmds}
                        >
                            Report
                        </button>
                    </div>
                </div>
                <div className='flex-col'>
                    <div className='report-wrapper'>
                        <div className='report-message'>
                            {report ? report : '...'}
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

ControlCMD.propTypes = {
    report: PropTypes.string,
    onCreateNewBusWithPosition: PropTypes.func,
    onTurnBusRight: PropTypes.func,
    onTurnBusLeft: PropTypes.func,
    onMoveBus: PropTypes.func,
    onPickBus: PropTypes.func,
    onReportPos: PropTypes.func
}

const mapStateToProps = () => ({
    controlType: 'CMD'
})

export { ControlCMD as ControlCMDCom }
export default ControlBase(ControlCMD, mapStateToProps);
