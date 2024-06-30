import React from 'react';
import classes from './modal.module.css';
import Input from '../Input/Input';


const Modal = ({handleOpen, handleTextInput, handleAdd}) => {
  return (
    <>
      <div className={classes.modalWrapper} onClick={handleOpen}></div>
      <div className={classes.modalContent}>
        <button onClick={handleOpen} className={classes.btn}>Закрыть</button>
        <Input
          name={'add'}
          onChange={handleTextInput}/>
        <button onClick={handleAdd} className={classes.btn}>Добавить</button>
      </div>
    </>
  );
};

export default Modal;
//rsc
//rsfa