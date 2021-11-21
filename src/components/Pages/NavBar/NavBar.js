import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Tevily/logo-1.png'
import useFirebase from '../../Hook/useFirebase';

const NavBar = () => {
  const{logOut,user} =useFirebase()
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to='/home'>
    <img src={logo} alt="Girl in a jacket" />
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to ='/home'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/services">Service</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/order">My Order</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/admin">Admin</Link>
        </li>
        <li class="nav-item">
          
          {user?.email ?
                            <button onClick={logOut} className='btn btn-primary'>Logout</button> :
                            <button onClick={logOut} className='btn btn-primary'>
                              <Link class="nav-link" to="/login">Log In</Link></button>}
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#login">{user?.displayName}</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default NavBar;