import React, { PropTypes, Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { Card, Button } from '../_ui';

export default class TodoList extends Component {
  static propTypes = {
    list: ImmutablePropTypes.listOf(
      ImmutablePropTypes.contains({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        isDone: PropTypes.bool,
      })
    ),
    removeItem: PropTypes.func,
    updateItem: PropTypes.func,
  };
  static defaultProps = {
    list: [],
    removeItem: () => {},
    updateItem: () => {},
  };
  static contextTypes = {
    router: PropTypes.object,
  }

  gotToEditView = (todo) => {
    this.context.router.push(`/edit/${todo.get('id')}`);
  }

  render() {
    const { list, removeItem, updateItem } = this.props;
    return (
      <div className="p2 border">
        {
          (() => {
            if (list.size === 0) {
              return (
                <div>No todos! Try creating one!</div>
              );
            }

            return list.map((todo, idx) => {
              return (
                <Card key={idx}>
                  <h3 className={todo.get('isDone') ? 'todo-done' : 'todo-undone'}>
                    {todo.get('title')}
                  </h3>
                  <p>{todo.get('description')}</p>
                  <p>
                    <Button
                      status="danger"
                      type="button"
                      onClick={() => removeItem(todo)}
                    >
                      Remove
                    </Button>
                    <Button
                      status="primary"
                      type="button"
                      onClick={() => updateItem(todo)}
                    >
                      Done
                    </Button>
                    <Button
                      status="primary"
                      type="button"
                      onClick={() => this.gotToEditView(todo)}
                    >
                      Edit
                    </Button>
                  </p>
                </Card>
              );
            });
          })()
        }
      </div>
    );
  }
}
