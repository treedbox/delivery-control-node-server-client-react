import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import { fetchClients } from "../../actions/clientActions";
import Profiles from "../../components/Profiles";

class ClientsPage extends Component {
  constructor(props) {
    super(props);
    console.log(`props:`, props);
    if (!this.props.clients.length) {
      props.fetchClients();
    }
    this.state = {
      clients: []
    };
  }

  componentDidMount = () => {
    this.setState(state => ({
      clients: this.props.fetchClients()
    }));
  };

  componentWillReceiveProps = nextProps => {
    if (this.props.clients.length) {
      this.setState(state => ({
        ...state,
        clients: this.props.clients
      }));
    }
  };

  render = () => (
    <section className="clients">
      <h2>Clients</h2>
      <Profiles
        list={this.props.clients}
        folder="clients"
        alt="Profile"
        hideRole={true}
      />
    </section>
  );
}

const mapStateToProps = state => ({
  clients: state.clients.items,
  newClient: state.clients.item
});

export default connect(
  mapStateToProps,
  { fetchClients }
)(ClientsPage);
