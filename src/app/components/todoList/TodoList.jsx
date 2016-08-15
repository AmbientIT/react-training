import React, { PropTypes } from 'react';

import TodoCard from '../todoCard/TodoCard';
import Button from '../button/Button';

const TodoList = ({ list, removeItem, updateItem }) => {
  return (
    <div className="p2 border">
      {
        (() => {
          if (list.length === 0) {
            return (
              <div>No todos! Try creating one!</div>
            );
          }

          return list.map((todo, idx) => {
            return (
              <TodoCard key={idx}>
                <h3 className={todo.isDone ? 'todo-done' : 'todo-undone'}>{todo.title}</h3>
                <p>{todo.description}</p>
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
              </TodoCard>
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
  list: PropTypes.array,
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
