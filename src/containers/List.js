import React from 'react';
import Character from '../components/Character';
import PropTypes from 'prop-types';

const List = ({ characters }) => {
  const listOfChars = characters.map(character => (
    <Character
      key={character._id}
      id={character._id}
      name={character.name}
      image={character.image}
    />
  ));
  return (
    <>
      {listOfChars}
    </>
  );
};

List.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.node)
};

export default List;

