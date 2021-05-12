import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';

import {ProductConsumer} from '../context'
export default class ProductList extends Component {
   
    
    render() {
    
        return (
            <React.Fragment>
            <div className="py-5">
            <div className="container">
                <Title name='Products' title='Available'/>
                <div className="row">
                   <ProductConsumer>
                        {value=>{ 
                        return value.products.map(product=>{
                            return <Product key={product.id} product={product}></Product>

                        })
                    }}
                    </ProductConsumer>
                </div>
                
                
            </div>
            </div>
            </React.Fragment>
        )
    }
}
