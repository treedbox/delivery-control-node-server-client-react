import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import { fetchUsers, updateUsers } from "../../actions/userActions";
import Profile from "../../components/Profiles/Profile";
import Select from "../../components/Select";

class UsersPage extends Component {
  constructor(props) {
    super(props);
    if (!this.props.users.length) {
      props.fetchUsers();
    }
    this.state = {
      users: [],
      roles: [
        {
          id: 1,
          value: "manager",
          text: "Manager"
        },
        {
          id: 2,
          value: "biker",
          text: "Biker"
        }
      ]
    };
  }

  componentDidMount = () => {
    this.setState(state => ({
      users: this.props.users
    }));
  };

  componentWillReceiveProps = nextProps => {
    if (this.props.users.length) {
      this.setState(state => ({
        ...state,
        users: this.props.users
      }));
    }
  };

  handleSelect = user => ev => {
    const users = this.props.users.map(e => {
      if (e.id === Number(user.id)) {
        e.role = ev.target.value;
      }
      return e;
    });

    this.props.updateUsers(users);

    this.setState(state => ({
      ...state,
      users
    }));
  };

  render = () => (
    <section className="users">
      <h2>Users</h2>
      {this.state.users.length ? (
        <>
          {this.state.users.map(e => (
            <div key={e.id} className="users-list">
              <Select
                id="select-role"
                value={e.role}
                handleSelect={this.handleSelect(e)}
                options={this.state.roles}
              />
              <Profile user={e} folder="users" alt="User" hideRole={true} />
            </div>
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
}

const mapStateToProps = state => ({
  users: state.users.items,
  newUser: state.users.item
});

export default connect(
  mapStateToProps,
  { fetchUsers, updateUsers }
)(UsersPage);
