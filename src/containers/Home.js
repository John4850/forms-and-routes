import React, { Component } from 'react';
import Character from '../components/Character';
import getOneRandomCharacter from '../../services/AvatarAPI';
import Form from './Form';


export default class Home extends Component {

  state = {
    character: {}
  }

  componentDidMount() {
    getOneRandomCharacter()
      .then(res => this.setState({
        character: res[0]
      }));
  }
  handleClick() {
    getOneRandomCharacter()
      .then(res => this.setState({
        character: res[0]
      }));
  }

  render() {
    return (
      <>
        <Character character={this.state.character}/>
        <button onClick={()=> this.handleClick()}>New Random Character</button>
        <Form />
      </>
    );
  }
}
