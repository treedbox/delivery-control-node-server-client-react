import React, { Component } from "react";
import "./style.css";
import Input from "./Input";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  handleChange = ev => {
    const newData = this.state.data.map(e => {
      if (e.name === ev.target.name) {
        e.value = ev.target.value;
      }
      return e;
    });

    this.setState(state => ({
      data: newData
    }));
  };

  resetForm = ev => {
    const newData = this.state.data.map(e => {
      e.value = "";
      return e;
    });

    this.setState(state => ({
      data: newData
    }));
  };

  render = () => (
    <form className={this.props.className} onSubmit={this.props.handleSubmit}>
      {this.state.data.map(e => (
        <Input key={e.id} attr={e} handleChange={this.handleChange} />
      ))}
      <button type="reset" onClick={this.resetForm}>
        RESET
      </button>
      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default Form;
