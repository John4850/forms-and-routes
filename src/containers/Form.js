import React from 'react';
import PropTypes from 'prop-types';


export default function Form({ handleSubmit, handleChange, nameQuery }) {
  Form.propTypes = {
    history: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    nameQuery: PropTypes.string.isRequired
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' name='nameQuery' value={nameQuery} onChange={handleChange} />
        <button>Search</button>
      </form>
    </>
  );

}

