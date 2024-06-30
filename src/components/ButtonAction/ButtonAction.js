import React from 'react';
import classes from "./buttonAction.module.css";

const ButtonAction = ({handelClick, type,task, children}) => {
    return (
        <button className={classes[type]} onClick={() =>handelClick(task.id)}>
            {children}
        </button>
    );
};

export default ButtonAction;