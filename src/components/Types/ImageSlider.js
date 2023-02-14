import React, { Component } from "react";
import * as _ from "lodash";
import Carousel from "react-elastic-carousel";

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "",
      items: [
        {
          label: "First Picture",
          imgPath:
            "https://media.geeksforgeeks.org/wp-content/uploads/20210208000010/1.png",
        },
        {
          label: "Second Picture",
          imgPath:
            "https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png",
        },
        {
          label: "Third Picture",
          imgPath:
            "https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png",
        },
      ],
      inline: false,
      multiple: false,
      toolType: "IMAGE_SLIDER",
      title: "",
      name: "",
      defaultValue: "",
      placeholder: '',
      description: "",
      validation: {
        isReadOnly: false,
        isRequired: false,
        min: 6,
        max: 6,
      },
      radios: [],
      duplicate: false,
    };
    this.removeOption = this.removeOption.bind(this);
  }

  componentWillMount() {
    this.setState(this.props.field);
  }

  changeValue(stateFor, value) {
    switch (stateFor) {
      case "NAME":
        this.setState({ name: value });
        break;
      case "TITLE":
        this.setState({ title: value });
        break;
      case "PLACEHOLDER":
        this.setState({ placeholder: value })
        break;
      case "DESCRIPTION":
        this.setState({ description: value });
        break;
      case "DEFAULT_VALUE":
        this.setState({ defaultValue: value });
        break;
      case "IS_REQUIRED":
        this.setState({
          validation: { ...this.state.validation, isRequired: value },
        });
        break;
      case "IS_READONLY":
        this.setState({
          validation: { ...this.state.validation, isReadOnly: value },
        });
        break;
      case "MAX":
        this.setState({ validation: { ...this.state.validation, max: value } });
        break;
      case "MIN":
        this.setState({ validation: { ...this.state.validation, min: value } });
        break;
      case "INLINE":
        this.setState({ inline: value });
        break;
      case "MULTIPLE":
        this.setState({ multiple: value });
        break;
      default:
        return;
    }
    setTimeout(() => {
      return this.props.changeState(this.state, this.props.index);
    }, 0);
  }

  removeOption(index) {
    let radios = this.state.radios;
    radios.splice(index, 1);
    this.setState({
      radios: radios,
    });
    this.duplicates();
    setTimeout(() => {
      return this.props.changeState(this.state, this.props.index);
    }, 0);
  }

  render() {
    const items = this.state.items;
    return (
      <div className="card card-outline-primary">
        <div className="card-header">
          <i className="fa fa-sliders mr-1"></i> Image Slider {this.state.title}
          <span
            className="align-right"
            onClick={() => this.props.removeField(this.props.index)}
          >
            <i className="fa fa-close mr-1"></i>
          </span>
        </div>
        <div className="card-body">

          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a onClick={(e) => { e.preventDefault(); this.setState({ tab: 'general' }) }} className={this.state.tab === 'general' ? 'nav-link active' : 'nav-link'} href="/general">Edit</a>
            </li>
            {/* <li className="nav-item">
              <a onClick={(e) => { e.preventDefault(); this.setState({ tab: 'validation' }) }} className={this.state.tab === 'validation' ? 'nav-link active' : 'nav-link'} href="/validation">Validation</a>
            </li>
            <li className="nav-item">
              <a onClick={(e) => { e.preventDefault(); this.setState({ tab: 'options' }) }} className={this.state.tab === 'options' ? 'nav-link active' : 'nav-link'} href="/options">Options</a>
            </li> */}
            <li className="nav-item" style={{
              textAlign: 'right',
              position: 'absolute',
              right: '15px',
            }}>
              <a onClick={(e) => { e.preventDefault(); this.setState({ tab: '' }) }} className={this.state.tab === '' ? 'nav-link active font-weight-bold' : 'nav-link'} href="/hide">-</a>
            </li>
          </ul>
          {/* <div hidden={this.state.tab !== 'general'} className="general">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <p className="alert alert-info text-center">
                      Name field will be use for the database
                    </p>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                      value={this.state.name}
                      onChange={(e) => this.changeValue("NAME", e.target.value)}
                      placeholder='Name' className='form-control' />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="title">Label Title</label>
                <input type="text"
                  value={this.state.title}
                  onChange={(e) => this.changeValue("TITLE", e.target.value)}
                  placeholder='Field Label Title' className='form-control' />
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="title">Default</label>
                  <input type="email"
                    value={this.state.defaultValue}
                    onChange={(e) => this.changeValue("DEFAULT_VALUE", e.target.value)}
                    placeholder='Default Value'
                    className='form-control' />
                </div>
              </div>
              <Carousel>
                {items.map((item) => (
                  <div key={item.id}>
                    <img src={item.imgPath} alt="" />
                  </div>
                ))}
              </Carousel>
            </div>
          </div> */}
          <div hidden={this.state.tab !== 'general'} className="general">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <p className="alert alert-info text-center">
                      Name field will be use for the database
                    </p>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                      value={this.state.name}
                      onChange={(e) => this.changeValue("NAME", e.target.value)}
                      placeholder='Name' className='form-control' />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="title">Default</label>
                    <input type="email"
                      value={this.state.defaultValue}
                      onChange={(e) => this.changeValue("DEFAULT_VALUE", e.target.value)}
                      placeholder='Default Value'
                      className='form-control' />
                  </div>
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="title">Label Title</label>
                    <input type="text"
                      value={this.state.title}
                      onChange={(e) => this.changeValue("TITLE", e.target.value)}
                      placeholder='Field Label Title' className='form-control' />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="title">Placeholder</label>
                    <input type="text"
                      value={this.state.placeholder}
                      onChange={(e) => this.changeValue("PLACEHOLDER", e.target.value)}
                      placeholder='Field Placeholder' className='form-control' />
                  </div>
                </div>
              </div>
              <Carousel>
                {items.map((item) => (
                  <div key={item.id}>
                    <img src={item.imgPath} alt="" />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          {/* <div hidden={this.state.tab !== 'validation'} className="general">
            <div className="card-body">
              <div className="form-check-inline">
                <input
                  value={this.state.validation.isRequired}
                  onChange={(e) => this.changeValue("IS_REQUIRED", e.target.checked)}
                  className="form-check-input" type="checkbox" id="isRequired" />
                <label className="form-check-label" htmlFor="isRequired">
                  Required
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  value={this.state.validation.isReadOnly}
                  onChange={(e) => this.changeValue("IS_READONLY", e.target.checked)}
                  className="form-check-input"
                  type="checkbox"
                  id="isReadOnly" />
                <label className="form-check-label" htmlFor="isReadOnly">
                  Readonly
                </label>
              </div>
              <hr />
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="title">Max Characters</label>
                    <input
                      value={this.state.validation.max}
                      onChange={(e) => this.changeValue("MAX", e.target.value)}
                      type="number" placeholder='6' className='form-control' />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="title">Min Characters</label>
                    <input
                      value={this.state.validation.min}
                      onChange={(e) => this.changeValue("MIN", e.target.value)}
                      type="number" placeholder='6' className='form-control' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div hidden={this.state.tab !== 'options'} className="options">
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
                              {this.state.multiple ?
                                <td style={{ verticalAlign: 'middle' }}>
                                  <div className="radio">
                                    {
                                      <input
                                        value={this.state.radios[index].selected}
                                        onChange={(e) => this.changeOptionValue(index, e.target.checked, "SELECTED")}
                                        type='checkbox' />
                                    }
                                  </div>
                                </td> : <td hidden={true}></td>
                              }
                              <td>
                                <input
                                  placeholder='Title'
                                  autoFocus={true}
                                  value={this.state.radios[index].title}
                                  onChange={(e) => this.changeOptionValue(index, e.target.value, "TITLE")}
                                  id={checkbox.title}
                                  type='text'
                                  className='form-control' />
                              </td>
                              <td>
                                <input
                                  placeholder='Value'
                                  value={this.state.radios[index].value}
                                  onChange={(e) => this.changeOptionValue(index, e.target.value, "VALUE")}
                                  id={checkbox.value}
                                  type='text'
                                  className='form-control' />
                              </td>
                              <td>
                                <span className="star"><i className="fa fa-circle"></i></span>

                              </td>

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
        <div className="card-footer"></div>
      </div>
    );
  }

  changeOptionValue(index, value, state) {
    let radios = this.state.radios;
    let radio = {};
    if (state === "DEFAULT_VALUE") {
      this.setState({
        defaultValue: index,
      });
    }
    if (state === "TITLE") {
      radio = {
        ...radios[index],
        title: value,
      };
    } else if (state === "SELECTED") {
      radio = {
        ...radios[index],
        selected: !radios[index].selected,
      };
    } else if (state === "VALUE") {
      radio = {
        ...radios[index],
        value: value,
      };
    } else {
      radio = {
        ...radios[index],
      };
    }

    radios[index] = radio;
    this.setState({
      radios: radios,
    });
    this.duplicates();
    setTimeout(() => {
      return this.props.changeState(this.state, this.props.index);
    }, 0);
  }

  duplicates() {
    let radios = this.state.radios;
    let u = _.uniqBy(radios, "value");
    if (!_.isEqual(radios, u)) {
      this.setState({
        duplicate: true,
      });
    } else {
      this.setState({
        duplicate: false,
      });
    }
  }

  addOption() {
    let radio = {
      title: "",
      value: "",
      selected: false,
    };
    let radios = this.state.radios;
    radios.push(radio);
    this.setState({
      radios: radios,
    });
    this.duplicates();
    setTimeout(() => {
      return this.props.changeState(this.state, this.props.index);
    }, 0);
  }
}

export default ImageSlider;
