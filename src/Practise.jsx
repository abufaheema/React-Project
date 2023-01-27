import React, { Component } from "react";

class Practise extends Component {
  constructor(Hello) {
    super(Hello);

    this.button2 = this.button2.bind(this);
  }

  state = {
    name: "Abdul",
    value: "",
    companyName: "",
    lists: ["Peter", "Sachin", "Kelvin", "Dhorin", "Alisa"],
  };

  changeText = (event) => {
    this.setState({
      companyName: event.target.value,
    });
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert("You have submitted the input successfully: " + this.state.value);
    event.preventDefault();
  };
  click() {
    this.setState({
      name: "Hello Abdulraman",
      data: "www.javatpoint.com",
    });
  }

  button2 = () => {
    alert("Button Clicked");
  };

  updateSubmit = (event) => {
    alert("You have entered the UserName and CompanyName successfully.");
  };

  render() {
    Practise.defaultProps = {
      text: "Props Testing",
    };

    var h1Style = {
      cursor: "pointer",
    };
    return (
      <React.Fragment>
        <h1 className="text-warning" style={h1Style}>
          {this.state.name}
        </h1>
        <h2 className="text-success" style={h1Style}>
          {this.props.text}
        </h2>
        <button className="btn btn-primary" onClick={this.click.bind(this)}>
          Change the text
        </button>
        <br />
        <h2 className="text-dark">React Constructor Example</h2>
        <input type="text" value={this.state.data} />
        <button className="btn btn-outline-success" onClick={this.button2}>
          Please Click
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <h1>Controlled Form Example</h1>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <p className="display-1">
          React <span className="text-danger">Event</span>
        </p>
        <h2>Simple Event Example</h2>
        <label htmlFor="name">Enter company name: </label>
        <input
          type="text"
          id="companyName"
          onChange={this.changeText.bind(this)}
        />
        <h4>You entered: {this.state.companyName}</h4>
        <p className="display-1">
          React <span className="text-danger">List</span>
        </p>
        <p>UnOrdered List</p>
        <ul>
          {this.state.lists.map((lists) => (
            <li key={lists}>{lists}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Practise;
