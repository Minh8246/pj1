import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"


import Login from './components/login/Login'
import Home from './components/home/Home';
import Signup from './components/signup/signup';
import Navbar from './components/navbar/navbar';
import ProductList from './components/productlist/ProductList';
import Product from './components/product/product';
import Payment from './components/payment/payment';

function App() {


  return (
    <BrowserRouter>
      
      <Routes>

        <Route path='/'  element={<Home/>}></Route>
        <Route path='/Home'  element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        
        <Route path={`/Product/:product_id`} element={
          <div>
            <Navbar/>
            <Product/>
          </div>
        }>
        </Route>

        <Route path='/Productlist' element={
          <div>
            <Navbar/>
            <ProductList/>
          </div>
        }>
        </Route>

        <Route path='/payment' element={
          <div>
            <Navbar/>
            <Payment/>
          </div>
        }>
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
