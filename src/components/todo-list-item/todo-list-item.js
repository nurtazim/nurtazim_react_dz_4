import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({onDone ,onDelete, onToggleImportant, id, label,done, important = false}) => {

    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal',
        textDecoration: done? "line-through":"normal"
            };

    return (
        <span className="todo-list-item">
      <span
          className="todo-list-item-label"
          style={style}>
        {label}
      </span>

      <button onClick={() => onToggleImportant(id)} type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation"/>
      </button>
      <button onClick={()=>onDone(id)} type="button" className="btn btn-outline-primary btn-sm float-right">
          <i className="bi bi-check2-all"/>
        </button>

      <button onClick={() => onDelete(id)} type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o"/>
      </button>

    </span>
    );
};

export default TodoListItem;
