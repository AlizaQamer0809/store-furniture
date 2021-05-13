import React, { Component } from 'react'
import PayPalButton from './PayPalButton'
import {Link} from 'react-router-dom';
export default function CartTotal ({value,history}) {
   const{Tex,Subtotal,Total,clearcart}=value
   
        return (
            <React.Fragment>
                 <div  style={{color:"#00008b"}} className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8
                    text-capitalize text-right">
                        <Link to ="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                            type="button" 
                            onClick={()=>clearcart()}>
                                Clear Cart</button>
                        </Link>
                        <h5>
                            <span className="text-title" >SubTotal :</span>
                        <strong>Rs {Subtotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title" >CartTex :</span>
                        <strong>Rs {Tex}</strong>
                        </h5>
                        <h5>
                            <strong><span className="text-title" >CartTotal :</span></strong>
                        <strong>Rs {Total}</strong>
                        </h5>
                        <PayPalButton total={Total} clearcart={clearcart} history={history}/>
                    </div>
                </div>
                
            </div>
            </React.Fragment>
           
        )
    
}
