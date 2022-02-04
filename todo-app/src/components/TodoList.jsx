import React, { useCallback } from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized';

const TodoList = ({ todos, onToggle, onRemove }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onToggle={onToggle}
          onRemove={onRemove}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    />
  );
};

export default React.memo(
  TodoList,
  (propsAreEqual, nextProps) => propsAreEqual.todos === nextProps.todos
);
