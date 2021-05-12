import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                     const{ model, closeModel}=value;
                     const{img,price,title}=value.modelProduct;
                     
                             if(!model){
                                 return null;
                             }
                             else{
                                 return(
                                 <ModalContainer>
                                     <div className="container">
                                         <div className="row">
                                             <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 p-5
                                             text-center">
                                                     <h3>Added To Cart</h3>
                                                     <img src={img} className="img-fluid" alt=""/>
                                                     <h5 className="h5">Title: {title}</h5>
                                                     <h5 className="h5">Price : Rs{price}</h5>
                                                     <Link className="link" to='/'>
                                                         <button onClick={()=>closeModel()} style={{backgroundColor:'rgb(158, 187, 187)',fontSize:'20px'}}>Continue Shopping</button></Link>
                                                     <br/>
                                                     <br/>
                                                     <Link  className="link" to ='/cart'>
                                                     <button onClick={()=>closeModel()}  style={{backgroundColor:'rgb(158, 187, 187)',fontSize:'20px'}}>Check Cart </button></Link>
                                                   
                                             </div>
                                         </div>
                                     </div>

                                 </ModalContainer>
                                 )
                             }
                         
                }}
                
            </ProductConsumer>
        )
    }
}
const ModalContainer=styled.div`
.container{
    width:1000px;
    height:800px;
    margin-top:300px
}
position:fixed;
border:1px solid gray;
display:flex;
align-items:center;
justify-content:center
background-color:rgba(0,0,0,0.3);
color:#FF6D6D;
top: 0;
left: 0;
right: 0;
bottom: 0;
#modal{
    background:#F7F0EE;

}

.h5{
    font-family: 'Itim', cursive !important;

}


`





