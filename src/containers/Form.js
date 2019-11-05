import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getByName from '../../services/AvatarAPI';

export default class Form extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    name: '',
  }

  handleSubmit = event => {
    event.preventDefault();
    getByName({ name }).then(res => {
      this.setState({ characters: [res] });
    });
    this.props.history.push(`list/${this.state.name}`);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='name' value={name} onChange={this.handleChange}/>
        <button>Search</button>
      </form>
    );

  }
}
