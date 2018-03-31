import axios from 'axios';

export default class {
  call(callback) {
    axios.get('/point', {
    }).then(callback);
  }
}
