import React, { Component } from 'react';
import Character from '../components/Character';
import getOneRandomCharacter from '../../services/AvatarAPI';


export default class home extends Component {

  state = {
    id: '',
    name: '',
    photoUrl: '',
    age: '',
    gender: '',
    hair: '',
    weapon: '',
    love: '',
    affiliation: '',
    allies: [],
    enemies: [],
  }

  componentDidUpdate() {
    getOneRandomCharacter()
      .then(res => this.setState({
        id: res._id,
        name: res.name,
        photoUrl: res.photoUrl,
        age: res.age,
        gender: res.gender,
        hair: res.hair,
        weapon: res.weapon,
        love: res.love,
        affiliation: res.affiliation,
        allies: res.allies,
        enemies: res.enemies,
      }));
  }

  render() {
    return (
      <>
        <Character
          _id={this.state._id}
          name={this.state.name}
          image={this.state.photoUrl}
        />
      </>
    );
  }
}
