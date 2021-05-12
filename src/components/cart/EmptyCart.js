import React, { Component } from 'react'
import Title from '../Title'

export default class EmptyCart extends Component {
    render() {
        return (
            <div style={{color:"#00008b ", marginLeft:'430px', fontWeight:'bold', fontSize:'40px',marginTop:'200px'}}>
                <div>Your Cart is Empty</div>
            </div>
        )
    }
}
