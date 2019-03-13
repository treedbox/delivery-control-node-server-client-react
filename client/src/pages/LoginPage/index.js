import React, { Component } from "react";
import "./style.css";
import Form from "../../components/Form";
import logo from "../../icons/bikers.svg";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          label: "Username",
          type: "text",
          name: "username",
          value: "",
          placeholder: "Your username",
          required: true
        },
        {
          id: 2,
          label: "Password",
          type: "password",
          name: "password",
          value: "",
          placeholder: "Your password",
          required: true
        }
      ],
      showMessage: false
    };
  }

  toggleMessage = () =>
    this.setState(state => ({
      ...state,
      showMessage: !this.state.showMessage
    }));

  handleSubmit = ev => {
    ev.preventDefault();
    const user = {
      username: ev.target.username.value,
      password: ev.target.password.value
    };
    let timer = "";

    clearTimeout(timer);

    const setTime = () => {
      timer = setTimeout(
        () => (this.state.showMessage ? this.toggleMessage() : null),
        2000
      );
    };

    this.props.checkUser(user).then(res => {
      if (res === undefined) {
        if (!this.state.showMessage) {
          this.toggleMessage();
        }
        setTime();
      }
    });
  };

  render = () => (
    <>
      <section className="login">
        {this.state.showMessage && (
          <div className="message error">Login Error. Try again.</div>
        )}
        <img className="App-logo" alt="Delivery control" src={logo} />
        <h1>Delivery control</h1>
        <h2>Login</h2>
        <Form
          className="login-form"
          data={this.state.data}
          handleSubmit={this.handleSubmit}
        />
      </section>
    </>
  );
}

export default LoginPage;
