import axios from 'axios';
import config from 'common/config';

const apiHttp = axios.create({
  baseURL: config.APIURL,
  headers: {
    'Content-type': 'application/json',
  },
});

const apiHttpInterceptor = httpConfig => {
  // console.log('request intercept', httpConfig);
  // Do something before request is sent
  return httpConfig;
};

const apiHttpResponseInterceptor = response => {
  // console.log('http response ', response);
  return Promise.resolve(response.data);
};

const httpErrorHandler = error => {
  console.error('http error', error);
  return Promise.reject(error);
};

apiHttp.interceptors.request.use(apiHttpInterceptor, httpErrorHandler);
apiHttp.interceptors.response.use(apiHttpResponseInterceptor, httpErrorHandler);

export default class HttpApi {
  constructor(resource) {
    this.uri = `/${resource}`;
    this.http = apiHttp;
  }

  findAll(params) {
    return this.http.get(this.uri, { params });
  }

  findOne(id, params = {}) {
    return this.http.get(`${this.uri}/${id}`, { params });
  }

  create(item) {
    return this.http.post(this.uri, item);
  }

  destroy(id) {
    return this.http.delete(`${this.uri}/${id}`);
  }

  update(item) {
    return this.http.put(`${this.uri}/${item.id || item.get('id')}`, item);
  }
}
