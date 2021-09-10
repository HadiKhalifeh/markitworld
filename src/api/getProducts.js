import api from './api';

const endpoint = '/products';

const products = async () => {
   
    return api.get(endpoint);
  };

  export default{products}