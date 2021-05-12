import React, { Component } from 'react'
import Title from '../Title'
import CartColumn from './CartColumn';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context'
import Cartlist from './Cartlist';
import CartTotal from './CartTotal'
export default class Cart extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>{
                (value)=>{
                    const{cart}=value;
                    if(cart.length>0){
                        return(
                            <React.Fragment>
                            <Title name="Your Cart" ></Title>
                            <CartColumn/>
                            <Cartlist value={value}/>
                            <CartTotal value={value}/>
                            </React.Fragment>
                        )
                            
                        
                    }
                    else{
                        return(
                            <React.Fragment>
                                 <EmptyCart/>
                           
                            </React.Fragment>
                        )
                    
                    }
                }}</ProductConsumer>
                
            </div>
        )
    }
}
