import devConfig from './env/development.json';
import prodConfig from './env/production.json';

export default Object.assign({
  APP_TITLE: 'ReactStarter',
}, process.env.NODE_ENV === 'production' ? prodConfig : devConfig);
