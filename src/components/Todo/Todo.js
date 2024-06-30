import React, { useState } from 'react';
import classes from './todo.module.css';
import Button from "../Button/Button";
import ButtonAction from "../ButtonAction/ButtonAction";


const Todo = (
  {
    task,
    handleDelete,
    handleDone,
    handleSelectCurrent,
    isEdit,
      handleEdit
  }) => {
  const [newTitle, setNewTitle] = useState(task.title)
  if (isEdit) {
    return <div>
      <input
        type="text"
      value={newTitle}
      onChange={event =>
          setNewTitle(event.target.value)
      }/>
      <button onClick={() => {
          handleEdit({
              ...task, title: newTitle
          })
          handleSelectCurrent(null)
      }}>Сохранить</button>
      <button onClick={() => {
          handleSelectCurrent(null)
      }}>Отмена</button>
    </div>;
  }
  return (
    <div className={`${classes.todo} ${task.completed && classes.isDone }`}>
      <h5>{task.id}   {task.title}</h5>
        <ButtonAction
            type={'edit'}
            task={task}
            handelClick={handleSelectCurrent}
        >
            Редактировать
        </ButtonAction>
        <ButtonAction
            type={'done'}
            task={task}
            handelClick={handleDone}
        >
            Done
        </ButtonAction>
        <ButtonAction
            type={'delete'}
            handelClick={handleDelete}
            task={task}
        >
            Удалить
        </ButtonAction>
    </div>
  );
};

export default Todo;