import React from 'react';
import classes from './Body.module.css';
//import Builder from '../../components/Builder/Builder.jsx';
import IceCreameBuilder from '../../container/IceCreamBuilder/IceCreameBulider.jsx';

const Body = () => {
    return (
        <div className={classes.mainBody}>
            <IceCreameBuilder/>
         
        </div>
    );
};

export default Body;
