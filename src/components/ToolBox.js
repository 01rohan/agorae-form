import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Table } from 'reactstrap';
let Tools = [
    {
        title: 'Text Field',
        name: 'SINGLE_FIELD',
        icon: 'fa fa-wpforms'
    },
    {
        title: 'Date',
        name: 'DATE',
        icon: 'fa fa-calendar'
    },
    {
        title: 'Time',
        name: 'TIME',
        icon: 'fa fa-clock-o'
    }, {
        title: 'Password',
        name: 'PASSWORD',
        icon: 'fa fa-key'
    }, {
        title: 'Number',
        name: 'NUMBER',
        icon: 'fa fa-hashtag'
    }, {
        title: 'Checkbox',
        name: 'CHECKBOX',
        icon: 'fa fa-check-square'
    }, {
        title: 'Email',
        name: 'EMAIL',
        icon: 'fa fa-at'
    }, {
        title: 'Url',
        name: 'URL',
        icon: 'fa fa-link'
    }, {
        title: 'Image',
        name: 'FILE',
        icon: 'fa fa-image'
    }, {
        title: 'Range',
        name: 'RANGE',
        icon: 'fa fa-sliders'
    }, {
        title: 'Phone',
        name: 'TEL',
        icon: 'fa fa-phone'
    }, {
        title: 'Rating',
        name: 'RATING',
        icon: 'fa fa-star'
    },
    {
        title: 'ScaleRating',
        name: 'SCALERATING',
        icon: 'fa fa-line-chart'
    },
    {
        title: 'Drop Down',
        name: 'SELECT_FIELD',
        icon: 'fa fa-chevron-circle-down'
    },
    {
        title: 'Multiple Choice',
        name: 'CHECK_BOXES',
        icon: 'fa fa-plus'
    },
    {
        title: 'Radio Buttons',
        name: 'RADIO_BUTTONS',
        icon: 'fa fa-circle'
    },
    {
        title: 'Paragraph',
        name: 'PARAGRAPH',
        icon: 'fa fa-paragraph'
    },
    {
        title: 'Duration Picker',
        name: 'DURATION_PICKER',
        icon: 'fa fa-calendar'
    },

];
class ToolBox extends Component {
    render() {
        return (
            <div className="toolbox">
                <div className=" card-default">
                    <div className="card-body toolbox-list p-0">
                        <div className="list-group">
                            <Input
                                type="search"
                                name="search"
                                id="exampleSearch"
                                placeholder="Search Components"
                            />
                        </div>
                        <ul className="list-group" ref={(tools) => this._tools = tools}>
                            {
                                Tools.map((types) => {
                                    return <li data-tool={types.name}
                                        onDragStart={(e) => this.dragField(e, types.name)}
                                        key={types.name}
                                        className='list-group-item singleField'>
                                        <i className={types.icon + " mr-3"}></i>
                                        {types.title}
                                    </li>
                                })
                            }
                            {
                                this.renderCustomTools()
                            }

                        </ul>
                    </div>
                </div>
                <div>
                    {/* <div className="container row expand">
                        <div><span class="far fa-arrow-alt-circle-right"></span></div>
                        <p className="subtitle">Form Assigne </p>
                    </div> */}
                    {/* <div className="container row users">
                        <img className="profile" src="./assets/profile/profile.jpg" />
                        <img className="profile" src="./assets/profile/profile.jpg" />
                        <Link > <img className="profile" src="./assets/profile/plus.png" /> </Link>
                    </div> */}
                    {/* <Table borderless className="table">
                        <tr>
                            <td className="labels">Template Name</td>
                            <td>Leave Form</td>
                        </tr>
                        <tr>
                            <td className="labels">Template Author</td>
                            <td>Admin Rita</td>
                        </tr>
                        <tr>
                            <td className="labels">Workflow</td>
                            <td>Leave Approval</td>
                        </tr>
                        <tr>
                            <td className="labels">Created</td>
                            <td>February 11,2021</td>
                        </tr>
                        <tr>
                            <td className="labels">Last Modified</td>
                            <td>March 18,2021</td>
                        </tr>
                    </Table> */}
                </div>
            </div>
        );
    }

    renderCustomTools() {
        if (this.props.custom) {
            return this.props.custom.map((types) => {
                return <li data-tool={types.toolbox.name}
                    onDragStart={(e) => this.dragField(e, types.toolbox.name)}
                    key={types.toolbox.name}
                    className='list-group-item singleField'>
                    <i className={types.toolbox.icon} />
                    {types.toolbox.title}
                </li>
            })
        }
    }

    componentDidMount() {
        let tools = this._tools;
        let $ = window.$;
        $(tools).children().each((i, l) => {
            $(l).draggable({ helper: "clone" });
        });
    }

    dragField(e, types) {
        e.dataTransfer.setData("dragField", types);
    }
}

export default ToolBox;
