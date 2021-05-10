import React from 'react';
import classes from './Scope.module.css';

const Scope = ({s}) => {
    return(
        <div className={[classes.scoop, classes[s]].join(' ')}/>

    )

}

export default Scope;