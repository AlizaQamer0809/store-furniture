import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import './Detail.css';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
export default class Detail extends Component {
    
    render() {
        
        return (
           
            <ProductConsumer>
            {(value)=>{ 
                  const {id,title,img,price,inCart,ManufacturedBy,info}=
           value.detailProduct;
           return(
              <div className="container">
                  <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                      <img className="img" src={img} alt=""/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3 text" >
                        <h1 className="h1">{title}</h1>
                        <h2 className="h2"> Price: Rs {price}</h2>
                        <br/>
                        <h2 className="madebyclass">ManufacturedBy: <br/>{ManufacturedBy}</h2>
                        <p className="p">{info}</p>
                        <br/>
                       
                        <button className="addtocart" disabled={inCart?true:false} 
                    onClick={()=>{value.addtocart(id) ;
                        value.openModel(id);}}>
                        {inCart?'InCart':'AddToCart'}
                    </button>
                       
                        
                       
                        <Link to="/">
                        <button className="backtoproducts">ProductPage</button></Link> 
                    </div>
                
                  </div>
                  
                  
              </div>
           )
            }
        }
        </ProductConsumer>
        )
    }
}
