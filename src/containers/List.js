import React from 'react';
import Character from '../components/Character';
import PropTypes from 'prop-types';

const List = ({ characters, handlePageBackward, handlePageForward, handleCharacterClick }) => {
  const listOfChars = characters.map(character => (
    <>
      <li key={character._id}>
        <Character
          handleClick={handleCharacterClick}
          id={character._id}
          name={character.name}
          image={character.photoUrl}
        />
      </li>
    </>
  ));
  return (
    <>
      <button onClick={handlePageBackward}>Back</button>
      <button onClick={handlePageForward}>Next</button>
      <ul>
        {listOfChars}
      </ul>
    </>
  );
};

List.propTypes = {
  handleCharacterClick: PropTypes.func.isRequired,
  characters: PropTypes.array,
  handlePageBackward: PropTypes.func.isRequired,
  handlePageForward: PropTypes.func.isRequired
};

export default List;

