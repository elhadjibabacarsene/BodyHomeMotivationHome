import Axios from 'axios';

function findAll() {
  return Axios.get(' http://127.0.0.1:8000/api/users').then(
    (response) => response.data['hydra:member']
  );
}

export default {
  findAll,
};
