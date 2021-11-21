import React from 'react';
import { Link } from 'react-router-dom';

const Rag = () => {
    return (
        <div>
            <div className="w-50 mx-auto">
            <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Name</label>
</div>
           <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div> 
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
<div className="mt-3">
<h4 className="">Already Register<Link to='/login'>Log In</Link></h4>
</div>
<button className='btn btn-primary mt-3'>Sign UP</button>
            </div>
        </div>
    );
};

export default Rag;