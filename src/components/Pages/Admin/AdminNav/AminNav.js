import React from 'react';
import { Link } from 'react-router-dom';
import Explor from './../Explor/Explor';

const AminNav = () => {
  return (
    <div >
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to='/home'>
    <h1>Travily</h1>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to ='/explor'>Explor</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/makeAdmin">Make Admin</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/addProduct">Add Product</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/manageProduct">Managr Product</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/orderLis">Order List</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
};

export default AminNav;