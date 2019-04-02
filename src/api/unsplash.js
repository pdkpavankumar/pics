import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers : {
    Authorization: 'Client-ID 69fde1d8b77a4bd1dbfb82fe04ab593c365dea561e0c511429c2b8f9a47567c9'
  }
});