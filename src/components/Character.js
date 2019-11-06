import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ character }) => {
  return (
    <div key={character._id} >
      <img src={character.photoUrl} alt={character.name} />
      <p>{name}</p>
    </div>
  );
};
Character.propTypes = {
  character: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    photoUrl: PropTypes.string,
  }
  ),
};
export default Character;
