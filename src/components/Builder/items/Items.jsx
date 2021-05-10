import React from 'react';
import Item from '../item/Item.jsx';

const Items = ({items,add,remove,scops}) => {
    const flavors = Object.keys(items)
    return(
        <div>
            <ul>
                {
                    flavors.map(flavor => <Item key={flavor} name={flavor} add={add} remove={remove} scops={scops} />)
                }

            </ul>
        </div>

    );
}

export default Items;