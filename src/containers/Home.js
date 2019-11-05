import React, { Component } from 'react';
import Character from '../components/Character';
import getOneRandomCharacter from '../../services/AvatarAPI';


export default class home extends Component {

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
        <Character
          _id={this.state.character._id}
          name={this.state.character.name}
          image={this.state.character.photoUrl}
        />
        <button onClick={()=> this.handleClick()}>New Random Character</button>
      </>
    );
  }
}
