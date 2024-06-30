import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import { useEffect } from 'react';
import List from './components/List/List';

function App() {
  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filterOption, setFilterOption] = useState('all');

  const handleOpen = () => {
    setShow(!show);
  };

  const handleTextInput = (event) => {
    setNewTask(event.target.value);
  };

  const handleAdd = () => {
    setTasks((prevState) => [
      ...prevState,
      {
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        title: newTask,
        completed: false,
      },
    ]);
  };

  const handleDelete = (id) => {
    const deleted = tasks.filter((task) => task.id !== id);
    setTasks([...deleted]);
  };

  const handleEdit = (editTodo) => {
    setTasks((prevTasks) =>
        prevTasks.map((task) =>
            task.id === editTodo.id ? { ...task, title: editTodo.title } : task
        )
    );
  };

  const handleDone = (id) => {
    setTasks((prevTasks) =>
        prevTasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )
    );
  };

  const handleClearAll = () => {
    setTasks([]);
    localStorage.removeItem('tasks');
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filterOption === 'all') {
      return true;
    } else if (filterOption === 'completed') {
      return task.completed;
    } else {
      return !task.completed;
    }
  });

  useEffect(() => {
    const myLocalList = JSON.parse(localStorage.getItem('tasks'));
    if (myLocalList === null) {
      return localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    if (myLocalList.length !== 0) {
      setTasks(myLocalList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
      <div className="App">
        <div>
          <select value={filterOption} onChange={handleFilterChange}>
            <option value="all">Все таски</option>
            <option value="completed">Выполненные</option>
            <option value="notCompleted">Не выполненные</option>
          </select>
        </div>
        <button className="btn" onClick={handleOpen}>
          Открыть
        </button>
        <button className="btn-clear" onClick={handleClearAll}>
          Очистить все
        </button>

        {show && (
            <Modal
                handleOpen={handleOpen}
                handleTextInput={handleTextInput}
                handleAdd={handleAdd}
            />
        )}
        <List
            tasks={filteredTasks}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleDone={handleDone}
        />
      </div>
  );
}

export default App;
