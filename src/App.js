import React, { Component } from 'react';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Modal from './components/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/cart';
import Details from './components/Detail';
import Default from './components/Default'
class App extends Component {
  render() {
    return (
      <div>
         <Navbar/>

         <Switch>
           <Route exact path='/' component={ProductList}/>
           <Route  path='/details' component={Details}/>
           <Route  path='/cart' component={Cart}/>
           <Route component={Default}/>
         </Switch>
         <Modal/>
      </div>
   

      
    );
  }
}

export default App;
