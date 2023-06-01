import axios from '../../core/axios';

export default {
  get: () => axios.get('/patients'),
  add: (values) => axios.post('/patients', values),
  patch: (id, values) => axios.patch('/patients/' + id, values),
  remove: (id) => axios.delete('/patients/' + id),
  show: (id) => axios.get('/patients/' + id),
};
