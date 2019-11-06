import React, { Component } from 'react';
import Character from '../components/Character';
import { getOneRandomCharacter, getByName } from '../../services/AvatarAPI';
import Form from '../components/Form';
import List from '../components/List';


export default class Home extends Component {

  state = {
    character: {},
    nameQuery: '',
    characters: [],
    page: 1,
    history: []
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });

  }

  componentDidMount() {
    getOneRandomCharacter()
      .then(res => this.setState({
        character: res[0]
      }));
  }

  handleRandomClick = () => {
    getOneRandomCharacter()
      .then(res => this.setState({
        character: res[0]
      }));
  }

  handleSubmit = event => {
    event.preventDefault();
    let name = this.state.nameQuery;
    getByName({ name }).then(res => {
      this.setState({ characters: [res] });
    });
    this.state.history.push(`list/${this.state.nameQuery}`);
  }

  handlePageForward() {
    this.setState(state => ({ page: state.page + 1 }));
  }

  handlePageBackward() {
    this.setState(state => {
      if(state.page > 1) {
        return ({ page: state.page - 1 });
      }
    });
  }

  handleCharacterClick() {
    console.log(this.state.characters);
  }


  render() {
    console.log(this.state);
    return (
      <>
        <Character character={this.state.character} />
        <button onClick={this.handleRandomClick}>New Random Character</button>
        <Form
          handleChange={this.handleChange}
          history={this.state.history}
          nameQuery={this.state.nameQuery}
          handleSubmit={this.handleSubmit}
        />
        <List
          characters={this.state.characters}
          handlePageBackward={this.handlePageBackward}
          handlePageForward={this.handlePageForward}
          handleCharacterClick={this.handleCharacterClick}
        />
      </>
    );
  }
}
