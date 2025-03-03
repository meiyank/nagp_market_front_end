import React from 'react';
import "./Header.scss";
import {Link} from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logoutUser } from '../../store/loginSlice';
import { clearCart } from '../../store/cartSlice';
import { googleLogout } from '@react-oauth/google';
import {setSidebarOn} from "../../store/sidebarSlice";

const Header = () => {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogOut = () => {
        console.log("log out")
        googleLogout();
        dispatch(logoutUser());
        dispatch(clearCart());
      };

  return (
    <header className='header text-white'>
      <div className='container'>
        <div className='header-cnt'>
          <div className='header-cnt-top fs-13 py-2 flex align-center justify-between'>
            <div className='header-cnt-top-l'>
              <ul className='flex top-links align-center'>
                  <li>
                      <div className='brand-and-toggler flex align-center px-2'>
                          <button type="button" className='sidebar-show-btn text-white'
                                  onClick={() => dispatch(setSidebarOn())}>
                              <i className='fas fa-bars'></i>
                          </button>

                      </div>
                  </li>

                  <li>
                      <Link to="/" className='navbar-brand flex align-center'>
                    <span className='navbar-brand-ico'>
                      <i className='fa-solid fa-bag-shopping shopping-cart-icon'></i>
                    </span>
                          <span className='navbar-brand-txt mx-2'>
                      <span className='fw-7'>NAGP </span>Market
                    </span>
                      </Link>
                  </li>
              </ul>
            </div>
            <div className='header-cnt-top-r'>
                <ul className='top-links flex align-center'>


                    <li className='vert-line'></li>

                    <li>
                        {user ? <div>
                    <span className='top-link-itm-txt' onClick={() => {
                        handleLogOut();
                    }}>Logout</span>
                            </div> :
                            <Link to="/login">
                                <span className='rectangle-box top-link-itm-txt'>Login</span>
                            </Link>
                        }

                    </li>
                    <li className=' mx-2'>
                        <Link to="/">Admin</Link>
                    </li>
                    <li>
                        <Link to="/" className='top-link-itm'>
                    <span className='top-link-itm-ico mx-2'>
                      <i className='fa-solid fa-circle-question'></i>
                    </span>
                            <span className='top-link-itm-txt'>Support</span>
                        </Link>
                    </li>
                </ul>
            </div>
          </div>

            <div className='header-cnt-bottom'>
            <Navbar/>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header