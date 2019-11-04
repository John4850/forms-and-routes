import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ _id, image, name }) => {
  return (
    <div key={_id}>
      <img src={image} alt={name} />
      <p>
        {name}
      </p>
    </div>
  );
};
Character.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
export default Character;
