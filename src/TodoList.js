import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import './styles.css';

const TodoList = ({ todos, deleteTodo }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = index => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !checkedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <ul className={todos.length === 0 ? 'no_tasks' : ''}>
      {todos.map((todo, index) => (
        <li key={index} className={`todo-item ${checkedItems[index] ? 'completed' : ''}`}>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={checkedItems[index] || false}
              onChange={() => handleCheckboxChange(index)}
            />
            <span className="checkbox-custom"></span>
          </label>
          <p>{todo}</p>
          <FaTrash onClick={() => deleteTodo(index)} style={{ marginLeft: '10px', cursor: 'pointer' }} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
