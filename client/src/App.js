import React, { Component } from "react";
import "./App.css";
import logo from "./icons/bikers.svg";
import Profile from "./components/Profiles/Profile";

import ShipmentsPage from "./pages/ShipmentsPage";
import LoginPage from "./pages/LoginPage";
import ClientsPage from "./pages/ClientsPage";
import UsersPage from "./pages/UsersPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import { connect } from "react-redux";
import { fetchClients } from "./actions/clientActions";
import { fetchShipments } from "./actions/shipmentActions";
import { fetchStatuses } from "./actions/statusActions";
import { fetchUsers } from "./actions/userActions";
import { fetchLogin, removeLogin } from "./actions/loginActions";

class App extends Component {
  constructor(props) {
    super(props);

    props.fetchShipments();
    props.fetchClients();
    props.fetchStatuses();
    props.fetchUsers();
  }

  checkUser = x => this.props.fetchLogin(x);

  isLogged = () => {
    if (Object.keys(this.props.login).length) {
      return true;
    } else {
      return false;
    }
  };

  componentDidMount = () => {};
  render() {
    return (
      <Router>
        <div className="App">
          {this.isLogged() && (
            <>
              <header className="App-header">
                <NavLink to="/" className="link-logo">
                  <img className="App-logo" alt="Delivery control" src={logo} />
                </NavLink>
                <h3>Delivery control</h3>
                <div className="logged-in-user">
                  <Profile
                    user={this.props.login}
                    folder="users"
                    alt="Profile"
                    hideEmail={true}
                  />
                  <button
                    className="exit"
                    onClick={() => this.props.removeLogin()}
                  >
                    Exit
                  </button>
                </div>
              </header>
              {this.props.login.role === "manager" && (
                <nav className="main-navigation">
                  <ul>
                    <li>
                      <NavLink className="link-main-nav" exact to="/">
                        Shipments
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="link-main-nav" to="/clients">
                        Clients
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="link-main-nav" to="/users">
                        Users
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              )}
            </>
          )}
          <Switch>
            {this.isLogged() ? (
              <>
                <Route exact path="/clients" component={ClientsPage} />
                <Route exact path="/users" component={UsersPage} />
                <Route exact path="/" component={ShipmentsPage} />
              </>
            ) : (
              <LoginPage checkUser={this.checkUser} isLogged={this.isLogged} />
            )}
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.items,
  login: state.logins.item,
  newUser: state.users.item,
  shipments: state.shipments.items,
  clients: state.clients.items,
  statuses: state.statuses.items
});

export default connect(
  mapStateToProps,
  {
    fetchClients,
    fetchShipments,
    fetchStatuses,
    fetchUsers,
    fetchLogin,
    removeLogin
  }
)(App);
