import React, { Component } from 'react';
import * as _ from "lodash";

class Divider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: '',
            inline: false,
            multiple: false,
            toolType: "DIVIDER",
            title: '',
            name: '',
            defaultValue: '',
            description: '',
            validation: {
                isReadOnly: false,
                isRequired: false,
                min: 6,
                max: 6
            },
            radios: [],
            duplicate: false
        }
        this.removeOption = this.removeOption.bind(this);
    }

    componentWillMount() {
        this.setState(this.props.field);
    }

    // changeValue(stateFor, value) {
    //     switch (stateFor) {
    //         case "NAME":
    //             this.setState({ name: value })
    //             break;
    //         case "TITLE":
    //             this.setState({ title: value })
    //             break;
    //         case "DESCRIPTION":
    //             this.setState({ description: value })
    //             break;
    //         case "DEFAULT_VALUE":
    //             this.setState({ defaultValue: value })
    //             break;
    //         case "IS_REQUIRED":
    //             this.setState({ validation: { ...this.state.validation, isRequired: value } })
    //             break;
    //         case "IS_READONLY":
    //             this.setState({ validation: { ...this.state.validation, isReadOnly: value } })
    //             break;
    //         case "MAX":
    //             this.setState({ validation: { ...this.state.validation, max: value } })
    //             break;
    //         case "MIN":
    //             this.setState({ validation: { ...this.state.validation, min: value } })
    //             break;
    //         case "INLINE":
    //             this.setState({ inline: value })
    //             break;
    //         case "MULTIPLE":
    //             this.setState({ multiple: value })
    //             break;
    //         default:
    //             return;
    //     };
    //     setTimeout(() => {
    //         return this.props.changeState(this.state, this.props.index);
    //     }, 0)
    // }

    removeOption(index) {
        let radios = this.state.radios;
        radios.splice(index, 1);
        this.setState({
            radios: radios
        });
        this.duplicates();
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }

    render() {
        return (
            <div className="card card-outline-primary">
                <div className="card-header">
                    <i className="fas fa-divide mr-1"></i> Divider {this.state.title}
                    <span className='align-right' onClick={() => this.props.removeField(this.props.index)}><i className="fa fa-close mr-1"></i></span>
                </div>
                <div className="card-body">
                    {/* <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a onClick={(e) => { e.preventDefault(); this.setState({ tab: 'general' }) }} className={this.state.tab === 'general' ? 'nav-link active' : 'nav-link'} href="/general">Edit</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={(e) => { e.preventDefault(); this.setState({ tab: 'validation' }) }} className={this.state.tab === 'validation' ? 'nav-link active' : 'nav-link'} href="/validation">Validation</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={(e) => { e.preventDefault(); this.setState({ tab: 'options' }) }} className={this.state.tab === 'options' ? 'nav-link active' : 'nav-link'} href="/options">Options</a>
                        </li>
                        <li className="nav-item" style={{
                            textAlign: 'right',
                            position: 'absolute',
                            right: '15px',
                        }}>
                            <a onClick={(e) => { e.preventDefault(); this.setState({ tab: '' }) }} className={this.state.tab === '' ? 'nav-link active font-weight-bold' : 'nav-link'} href="/hide">-</a>
                        </li>
                    </ul> */}
                    {/* <div hidden={this.state.tab !== 'options'} className="options">
                        <div className="card-body">
                            <p hidden={!this.state.duplicate} className="alert text-center alert-danger"><strong>Duplicate</strong> Values Found</p>
                            {
                                this.state.radios ?
                                    <table className='table text-center'>
                                        <tbody>
                                            {
                                                this.state.radios.map((checkbox, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td style={{ verticalAlign: 'middle' }}>
                                                                <span onClick={() => this.removeOption(index)} className="cross pull-right">x</span>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                        </tbody>
                                    </table>
                                    : <span></span>
                            }
                            <button onClick={() => this.addOption()} className="btn form-control btn-sm btn-dark">Add</button>
                        </div>
                    </div> */}
                </div>
                <div className="card-footer">
                </div>
            </div>
        )
    }

    changeOptionValue(index, value, state) {
        let radios = this.state.radios;
        let radio = {};
        if (state === "DEFAULT_VALUE") {
            this.setState({
                defaultValue: index
            })
        }
        if (state === "TITLE") {
            radio = {
                ...radios[index],
                title: value,
            }
        } else if (state === 'SELECTED') {
            radio = {
                ...radios[index],
                selected: !radios[index].selected
            }
        } else if (state === 'VALUE') {
            radio = {
                ...radios[index],
                value: value
            }
        } else {
            radio = {
                ...radios[index]
            }
        }

        radios[index] = radio;
        this.setState({
            radios: radios
        });
        this.duplicates();
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }

    duplicates() {
        let radios = this.state.radios;
        let u = _.uniqBy(radios, 'value');
        if (!_.isEqual(radios, u)) {
            this.setState({
                duplicate: true
            });
        } else {
            this.setState({
                duplicate: false
            });
        }
    }

    addOption() {
        let radio = {
            title: '',
            value: '',
            selected: false
        }
        let radios = this.state.radios;
        radios.push(radio)
        this.setState({
            radios: radios
        });
        this.duplicates();
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }
}

export default Divider;