
import React, { Component } from 'react';
import classes from './IceCreameBuilder.module.css';
import Builder from '../../components/Builder/Builder.jsx';
import IceCreame from '../../components/IceCream/IceCream.jsx';

class IceCreameBuilder extends Component {
    state = {
        items: {},
        scops: [],
        totalprice: 0,
    };

    componentDidMount(){
        fetch('https://ecomarece.firebaseio.com/items.json').then(response =>
         response.json()).then(responedata  => {
            //console.log(responedata);
            this.setState({
                items:responedata,
            })

        });

    }
    addScope =(scop) => {
        const {scops,items} = this.state;
        const workingScops = [...scops];
        workingScops.push(scop);
        this.setState((prevState) => {
            return{
                scops : workingScops,
                totalprice:prevState.totalprice +  items[scop],
            }
        });

    }
    removeScope =(scop) => {
        const {scops,items} = this.state;
        const workingScops = [...scops];
        const scopeIndex = workingScops.findIndex((sc) => sc === scop)
        workingScops.splice(scopeIndex, 1);
        this.setState((prevState) => {
            return{
                scops : workingScops,
                totalprice:prevState.totalprice - items[scop],
            }
        });


    }
    render(){
        const {items,totalprice,scops} = this.state;
        return(
            <div className={['container',classes.container].join(' ')}>
                <IceCreame scops={scops} />
                <Builder 
                items={items} 
                price ={totalprice} 
                add={this.addScope} 
                remove={this.removeScope}
                scops={scops}
                />

            </div>
        )
    }
}

export default IceCreameBuilder;