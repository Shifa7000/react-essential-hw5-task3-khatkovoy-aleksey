import React from "react";
import "./index.css";

class TestForm extends React.Component {
  state = {
    text1: 0,
    text2: 0,
  };

  handleChange = (e) => {
    const { name, value = 0 } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.result = JSON.stringify(this.state);
  };

  render() {
    return (
      <div className="TestForm">
        <label>
          <input type="number" name="text1" value={this.state.text1} onChange={(e) => this.handleChange(e)} />
        </label>
        <p>{this.state.text1 * 0.5}</p>
        <label>
          <input type="number" name="text2" value={this.state.text2} onChange={(e) => this.handleChange(e)} />
        </label>
        <p>{this.state.text2 * 0.05}</p>
      </div>
    );
  }
}

export default TestForm;
