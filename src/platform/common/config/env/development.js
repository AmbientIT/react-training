const devConfig = {
  APIURL: process.env.BROWSER ? 'http://localhost:3000/api' : 'http://192.168.1.4:3000/api',
};

export default devConfig;
