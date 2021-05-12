import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components'



export default class Navbar extends Component {
    

   
     render() {
        const ButtonStyle=styled.button`
        text-transform:capitalize;
        font-size:1.3rem;
        padding: 2.5px;
        transition:all 0.5s ease-in-out;
        background:#343a40;
        &:hover{
          background:#484d53;
          color:"#B4A5A5"

        }
        
    `;
    
        
        return (
           
            <nav className="navbar navbar-expand-sm bg-dark navbar-light bg-faded">
                <Link to ='/'>
                    <img src={logo} alt='store' className="navbar-brand"></img>
                </Link>
                <ul className=" navbar-nav"  style={{marginLeft:'40px' }}>
                    <li className="nav-item ml-5">
                    <Link to='/' className="nav-link"  style={{ color:"#B4A5A5" , fontWeight:'bold' , cursor:"pointer"}}>Products Available</Link>
                    </li>
                </ul>

                <div style={{marginLeft:'150px', fontWeight:'bolder' }} >Welcome to Zain Steel and Furniture</div>
                
                <ul className="navbar-nav "  style={{marginLeft:'350px'}}>
                    <li className="nav-item ml-5">
                   <Link to='/cart' className="nav-link" >
                       <ButtonStyle > 
                       My Cart
                          </ButtonStyle></Link>
                    </li>
                </ul>
             
                </nav>
           
        )
    
}
}