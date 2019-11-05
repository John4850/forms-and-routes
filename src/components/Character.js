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
  _id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string
};
export default Character;
