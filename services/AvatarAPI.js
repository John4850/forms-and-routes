// import React from 'react';


const URL = 'https://last-airbender-api.herokuapp.com';
const singleRandom = '/api/v1/characters/random';

const getOneRandomCharacter = () => {
  return fetch(`${URL} + ${singleRandom}`).then(response => response.json())
    .then(response => {
      return response;
    });
};

// eslint-disable-next-line no-undef
module.exports = getOneRandomCharacter;
