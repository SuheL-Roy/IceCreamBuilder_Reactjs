import React from 'react';
import classes from './Builder.module.css';
import Items from './items/Items.jsx';
import TotalPrice from './TotalPrice/TotalPrice.jsx';
import Modal from './Modal/Modal.jsx';
const Builder = ({items,price,add,remove,scops}) => {
    return(

        <div>
            <div className={classes.builder}>
                <h3>Build your Own Ice Cream</h3>
                  <Items items={items} add={add} remove={remove} scops={scops}/>
                  <TotalPrice price={price}/>
                <button type='button' className={[classes.order,'rounded'].join(' ')}>
                    Add to cart
                </button>

            </div>
            <Modal>
                Hello Modal
            </Modal>

        </div>
    );
}
export default Builder;