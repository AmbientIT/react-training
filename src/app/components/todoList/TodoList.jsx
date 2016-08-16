import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { Card, Button } from '../_ui';

const TodoList = ({ list, removeItem, updateItem }) => {
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
                </p>
              </Card>
            );
          });
        })()
      }
    </div>
  );
};

TodoList.propTypes = {
  /**
   * Tableau de todo à afficher
   */
  list: ImmutablePropTypes.listOf(
    ImmutablePropTypes.contains({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      isDone: PropTypes.bool,
    })
  ),
  /**
   * Les fonctions à appeler au clic sur les bouttons
   */
  removeItem: PropTypes.func,
  updateItem: PropTypes.func,
};
TodoList.defaultProps = {
  list: [],
  removeItem: () => {},
  updateItem: () => {},
};

export default TodoList;
