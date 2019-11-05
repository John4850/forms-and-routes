import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  static propTypes = {
    search: PropTypes.object.isRequired
  }

  state = {
    character: {
      name: '',
    },
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.search.push(`/${this.state.character.name}`);
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
