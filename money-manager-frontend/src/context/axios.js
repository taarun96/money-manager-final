import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://money-manager-taarun.herokuapp.com/',
});

export default instance;
