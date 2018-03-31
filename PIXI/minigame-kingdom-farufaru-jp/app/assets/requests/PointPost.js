import axios from 'axios';

export default class {
  constructor(id, point) {
    this.id = id;
    this.point = point;
  }

  call(callback) {
    axios.post('/point', {
      stage_id: this.id,
      point: this.point,
    }).then(callback);
  }
}
