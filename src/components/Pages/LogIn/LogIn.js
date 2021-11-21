import React from 'react';
import { Link,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const LogIn = () => {
  const{googleSignIn} =useAuth()
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';


  const handleGoogleLogin = () => {
      googleSignIn()
          .then((result) => {
            history.push(redirect_uri);
        })
  }
    return (
        <div className=''>
           <div className="w-25 m-auto mt-5 border border-3">
           <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
                </div>
                <div>
                  <h4>Create Your Account <Link to='/rag'>Sign UP</Link></h4>
                </div>
                <button className="btn btn-primary">Sign In</button>
           </div>
           <div className="text-center mt-5">
             <button onClick={handleGoogleLogin} className='btn btn-primary'>Google Sign In</button>
           </div>
        </div>
    );
};

export default LogIn;