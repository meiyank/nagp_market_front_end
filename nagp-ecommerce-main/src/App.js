import './App.scss';
// react router v6
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
import {Home, CategoryProduct, ProductSingle, Cart, Search} from "./pages/index";
// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import store from "./store/store";
import {Provider} from "react-redux";
import { useState } from 'react';
import LoginSignUp from './components/LoginSignUp/LoginSignUp';
import ProtectedRoutes from './components/ProtectedRoute/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
          <Header />
          <Sidebar />

          <Routes>
            {/* home page route */}
            <Route path = "/" element = {<Home />} />
            {/* single product route */}
            <Route path = "/product/:id" element = {<ProductSingle />} />
            {/* category wise product listing route */}
            <Route path = "/category/:id/:categoryName" element = {<CategoryProduct />} />
            {/* cart */}
            {/* <Route path = "/cart" element = {<Cart />} /> */}
            <Route element={<ProtectedRoutes />}>
                <Route element={<Cart/>} path="/cart" exact/>
            </Route>
            

            {/* searched products */}
            <Route path = "/search/:searchTerm" element = {<Search />} />
           
            <Route path="/login" element={<LoginSignUp />} />
            
          </Routes>

          <Footer />
          <ToastContainer/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

