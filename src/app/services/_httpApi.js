import fetchIntercept from 'fetch-intercept';
import qs from 'jquery-param';
import config from '../_config';

const apiHeaders = new Headers({
  'Content-Type': 'application/json',
});

fetchIntercept.register({
  request(url, httpConfig) {
    console.log('httpConfig', httpConfig);
    // httpConfig.headers.append(
    //   'Authorization',
    //   `Bearer ${localStorage.getItem('token')}`
    // );
    return [url, httpConfig];
  },
  requestError(error) {
    console.error('http request error : ', error);
    return Promise.reject(error);
  },
  response(response) {
    return response.json();
  },
  responseError(error) {
    console.error('http response error : ', error);
    return Promise.reject(error);
  },
});

export default class HttpApi {
  constructor(resource) {
    this.uri = `${config.APIURL}/${resource}`;
  }

  findAll(params = {}) {
    return fetch(`${this.uri}?${qs(params)}`, {
      method: 'GET',
      headers: apiHeaders,
    });
  }

  findOne(id, params = {}) {
    return fetch(`${this.uri}/${id}?${qs(params)}`, {
      method: 'GET',
      headers: apiHeaders,
    });
  }

  create(item) {
    return fetch(this.uri, {
      method: 'POST',
      headers: apiHeaders,
      body: JSON.stringify(item),
    });
  }

  destroy(id) {
    return fetch(`${this.uri}/${id}`, {
      method: 'DELETE',
      headers: apiHeaders,
    });
  }

  update(item) {
    return fetch(`${this.uri}/${item.id}`, {
      method: 'PUT',
      headers: apiHeaders,
      body: JSON.stringify(item),
    });
  }
}
