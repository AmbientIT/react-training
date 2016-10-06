import fetch from 'isomorphic-fetch';
import qs from 'jquery-param';

const headers = new Headers({
  'Content-Type': 'application/json',
});

export default (url, options, params) => {
  return fetch(
    `${url}?${qs(params)}`,
    Object.assign(options, {
      headers,
    })
  )
  .then(res => res.json());
};
