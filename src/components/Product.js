import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import { ProductConsumer } from '../context';

export default class Product extends Component {

    render() {
        
        const {id,title,img,price,inCart}=this.props.product;
          
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {(value)=>(
                    <div className="img-container p-5"
                    onClick={()=>
                    value.detail(id)}>
                        <Link to ='/details'>
                            <img src={img} alt="product" className="card-img-top" style={{width:'150px',height:'150px'}}></img>
                        </Link>
                        
                        <button className="card-btn" disabled={inCart?true:false} 
                    onClick={()=>{
                            value.addtocart(id);
                             value.openModel(id);
                            }}

                            >
                        {inCart?(
                        <p className="in-cart mb-0" disabled>{" "} In Cart </p>
                    ):
                    ( <img src="https://static.vecteezy.com/system/resources/previews/000/500/564/original/add-to-cart-icon-design-vector.jpg" style={{width:'35px', height:"35px"}} alt=""></img>)}

                    </button>
                      
                    
                    </div>
                        )}
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="text-blue mb-0" style={{fontWeight:'bold', fontFamily: 'AbrilFatface-Regular'}}>{title}</p>
                        <h5 className="text-blue mb-0" >
                            <span className="mr-1">Rs</span>
                            {price}
                        </h5>

                    </div>
                </div>
                </ProductWrapper>
        )
    }
}

const ProductWrapper=styled.div`
.card{
    border:1px solid gray;
  
}
.card-footer{
    background :transparent;
    transition:all 0.3s ease-in;
    
}
&:hover{
    .card{
        box-shadow: 10px 5px 5px #18A8D8;
        border:0px solid gray;
    }
    .card-footer{
        background:#F7EEEE	;
    }

}
.img-container{
    position:relative;
    overflow:hidden;
   
    
}
.card-btn{
    position:absolute;
    bottom:0;
    right:0.5;
    padding:1px;
    border:1px solid #18A8D8;
    box-shadow: 1px 0.5px 0.5px #18A8D8;
    border-radius:80%;
    transform:translate(100%,100%);
    transition:all 1s linear;

}
.card-btn:hover{
    cursor:pointer;
}
.in-cart{
    color:#18A8D8;
    
}
.card-img-top{
    transition:all 1s linear;
}
.img-container:hover .card-btn{
    transform:translate(0%,0%)
}
.img-container:hover .card-img-top{
    transform:scale(1.1);
    
}`