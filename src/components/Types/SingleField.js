import React, { Component } from "react";
var InputTypes = [
  "Checkbox",
  "Color",
  "Date",
  "Email",
  "File",
  "Month",
  "Number",
  "Password",
  "Radio",
  "Range",
  "Search",
  "Tel",
  "Text",
  "Time",
  "Url",
  "Week",
  "Textarea",
];
class SingleField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "",
      title: "",
      type: "Text",
      name: "",
      toolType: "SINGLE_FIELD",
      defaultValue: "",
      placeholder: "",
      description: "",
      textColor: '#000000',
      backgroundColor: '#cccccc',
      color: '',
      fontSize: '',
      align: 'center',
      validation: {
        isReadOnly: false,
        isRequired: false,
        min: 6,
        max: 6,
      },
    };
    this.changeValue = this.changeValue.bind(this);
  }

  componentWillMount() {
    this.setState(this.props.field);
  }

  fontSizes() {
    let sizes = [];
    for (let i = 6; i <= 72; i++) {
      sizes.push(i);
    }
    return sizes;
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
        this.setState({ placeholder: value });
        break;
      case "TYPE":
        this.setState({ type: value });
        break;
      case "DESCRIPTION":
        this.setState({ description: value });
        break;
      case "BACKGROUND_COLOR":
        this.setState({ backgroundColor: value })
        break;
      case "TEXT_COLOR":
        this.setState({ textColor: value })
        break;
      case "FONT_SIZE":
        this.setState({ fontSize: value })
        break;
      case "TEXT_ALIGN":
        this.setState({ align: value })
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
      default:
        return;
    }
    setTimeout(() => {
      return this.props.changeState(this.state, this.props.index);
    }, 0);
  }

  render() {
    return (
      <div className="card card-outline-primary">
        <div className="card-header">
          <i className="fa fa-wpforms mr-1"></i> Text Field {this.state.title}
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
              <a
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ tab: "general" });
                }}
                className={
                  this.state.tab === "general" ? "nav-link active" : "nav-link"
                }
                href="/general"
              >
                Edit
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ tab: "validation" });
                }}
                className={
                  this.state.tab === "validation"
                    ? "nav-link active"
                    : "nav-link"
                }
                href="/validation"
              >
                Validation
              </a>
            </li>
            <li className="nav-item">
              <a onClick={(e) => { e.preventDefault(); this.setState({ tab: 'style' }) }} className={this.state.tab === 'style' ? 'nav-link active' : 'nav-link'} href="/style">Style</a>
            </li>
            <li
              className="nav-item"
              style={{
                textAlign: "right",
                position: "absolute",
                right: "15px",
              }}
            >
              <a
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ tab: "" });
                }}
                className={
                  this.state.tab === ""
                    ? "nav-link active font-weight-bold"
                    : "nav-link"
                }
                href="/hide"
              >
                -
              </a>
            </li>
          </ul>
          <div hidden={this.state.tab !== "general"} className="general">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <p className="alert alert-info text-center">
                      Name field will be use for the database
                    </p>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      value={this.state.name}
                      onChange={(e) => this.changeValue("NAME", e.target.value)}
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                {/* <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="title">Type</label>
                    <select
                      onChange={(e) => this.changeValue("TYPE", e.target.value)}
                      className="form-control"
                      defaultValue={this.state.type}
                    >
                      {InputTypes.map((type) => {
                        return (
                          <option value={type} key={type}>
                            {type}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div> */}
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="title">Default</label>
                    <input
                      type="text"
                      value={this.state.defaultValue}
                      onChange={(e) =>
                        this.changeValue("DEFAULT_VALUE", e.target.value)
                      }
                      placeholder="Default Value"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="title">Label Title</label>
                    <input
                      type="text"
                      value={this.state.title}
                      onChange={(e) =>
                        this.changeValue("TITLE", e.target.value)
                      }
                      placeholder="Field Label Title"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="title">Placeholder</label>
                    <input
                      type="text"
                      value={this.state.placeholder}
                      onChange={(e) =>
                        this.changeValue("PLACEHOLDER", e.target.value)
                      }
                      placeholder="Field Placeholder"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="title">Description</label>
                    <textarea
                      value={this.state.description}
                      onChange={(e) =>
                        this.changeValue("DESCRIPTION", e.target.value)
                      }
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div hidden={this.state.tab !== "validation"} className="general">
            <div className="card-body">
              <div className="form-check">
                <input
                  value={this.state.validation.isRequired}
                  onChange={(e) =>
                    this.changeValue("IS_REQUIRED", e.target.checked)
                  }
                  className="form-check-input"
                  type="checkbox"
                  id="isRequired"
                />
                <label className="form-check-label" htmlFor="isRequired">
                  Required
                </label>
              </div>
              <hr />

              <div className="form-check">
                <input
                  value={this.state.validation.isReadOnly}
                  onChange={(e) =>
                    this.changeValue("IS_READONLY", e.target.checked)
                  }
                  className="form-check-input"
                  type="checkbox"
                  id="isReadOnly"
                />
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
                      type="number"
                      placeholder="6"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="title">Min Characters</label>
                    <input
                      value={this.state.validation.min}
                      onChange={(e) => this.changeValue("MIN", e.target.value)}
                      type="number"
                      placeholder="6"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="style" hidden={this.state.tab !== 'style'}>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="Color">Text Color</label>
                    <input
                      value={this.state.textColor}
                      onChange={(e) => this.changeValue("TEXT_COLOR", e.target.value)}
                      className='form-control' type="color" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="BackgroundColor">Background Color</label>
                    <input
                      value={this.state.backgroundColor}
                      onChange={(e) => this.changeValue("BACKGROUND_COLOR", e.target.value)}
                      className='form-control' type="color" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="Color">Text Align</label>
                    <select
                      value={this.state.align}
                      onChange={(e) => this.changeValue("TEXT_ALIGN", e.target.value)}
                      className="form-control">
                      <option value="center">Center</option>
                      <option value="left">Left</option>
                      <option value="right">Right</option>
                      <option value="justify">Justify</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="Color">Font Size</label>
                    <select
                      value={this.state.fontSize}
                      onChange={(e) => this.changeValue("FONT_SIZE", e.target.value)}
                      className="form-control">
                      <option selected={true} disabled value=''>
                        {'Select Font Size'}
                      </option>
                      {
                        this.fontSizes().map((size) => {
                          return <option key={size} value={size + 'px'}>{size} px</option>
                        })
                      }
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer"></div>
      </div>
    );
  }
}

export default SingleField;
