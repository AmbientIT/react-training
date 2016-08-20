import devConfig from './env/development';
import prodConfig from './env/production';

export default Object.assign({
  APP_TITLE: 'ReactStarter',
}, process.env.NODE_ENV === 'production' ? prodConfig : devConfig);
