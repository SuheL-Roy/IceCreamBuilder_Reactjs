import React from 'react';
import classes from './IceCreame.module.css';
import Scope from './Scope/Scope.jsx';

const IceCreame = ({scops}) => {
    //const flavors = Object.keys(scops);
    //console.log(flavors);
    return(
        <div>
        <div className={classes.icecream}>
            <p className={classes.cone}/>
            
            
            {scops.map(scoope =>
                 <Scope s={scoope}
                 key={`${scoope}${Math.random()}`}
                 />
                  )}
            <div className={classes.cherry}/>

        </div>
        </div>

    );
}
export default IceCreame;