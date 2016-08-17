import HttpApi from './_httpApi';

export default class TodoHttp extends HttpApi {
  constructor() {
    super('todo');
  }
}
