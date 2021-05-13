import React, { Component } from 'react'
import './CartItem.css';

export default function CartItem ({item,value}){
    
   
        const {id,title,img,price,inCart,count,total}=item;
        const{increment, decrement,removeitem}=value
        return (
            <div style={{color:"#00008b"}} className="row my-1 text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img src={img} style={{width:'5rem',height:'5rem'}} 
                    className="img-fluid" alt=""></img>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">product: </span>
                    {title}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">price: </span>
                    Rs {price}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>
                            <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
                            <span className="btn btn-black mx-1" >{count}</span>
                            <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
                        </div>
                    </div>
                </div>
               <div className="col-10 mx-auto col-lg-2">
                 <button  onClick={()=>removeitem(id)}>
                 <img src="https://th.bing.com/th/id/OIP.stT2B6mAyIOvABrD-VA1GgHaD4?pid=ImgDet&rs=1" style={{width:'30px', height:"30 px"}} alt=""></img>
                 </button>
               </div>
               <div className="col-10 mx-auto col-lg-2">
                    <strong>Item Total : Rs {total}</strong>
               </div>
               
            </div>
        )
    
}
