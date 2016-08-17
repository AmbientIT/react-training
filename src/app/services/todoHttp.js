import HttpApi from './_httpApi';

class TodoHttp extends HttpApi {
  constructor() {
    super('todo');
  }
}

export default new TodoHttp();
