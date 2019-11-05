
const URL = 'https://last-airbender-api.herokuapp.com';
const singleRandom = '/api/v1/characters/random';

const getOneRandomCharacter = () => {
  return fetch(`${URL}${singleRandom}`).then(response => response.json())
    .then(response => {
      return response;
    });
};

const getByName = ({ name }) => {
  return fetch(`${URL}/api/v1/characters?name=${name}`).then(response => response.json())
    .then(response => {
      return response;
    });
};

// eslint-disable-next-line no-undef
module.exports = getOneRandomCharacter, getByName;
