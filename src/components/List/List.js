import React, { useState } from 'react';
import Todo from '../Todo/Todo';


const List = (
  {
    tasks,
    handleDelete,
    handleEdit,
    handleDone
  }) => {
  const [currentEdit, setCurrentEdit] = useState()
  return (
    <div>
      {tasks.map(task =>
        <Todo
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleSelectCurrent={setCurrentEdit}
          handleDone={handleDone}
          isEdit = {currentEdit===task.id}
        />)}
    </div>
  );
};

export default List;