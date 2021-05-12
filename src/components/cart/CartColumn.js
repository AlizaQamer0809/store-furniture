import React, { Component } from 'react'
import styled from 'styled-components'

export default class CartColumn extends Component {
    render() {
        return (
            <div style={{color:"#00008b",fontWeight:'bold'}} id="container" className="container-fluid text-center d-none d-lg-block">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Products</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Name of Products</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Price</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Quantity</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Remove</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Total</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

const DivWrapper =styled.div`
#container{
    color:gray;
    text-align: center;
   font-family: 'Itim', cursive !important;
    font-style: italic;
    font-size: 50px;
    margin-top: 80px;

}`