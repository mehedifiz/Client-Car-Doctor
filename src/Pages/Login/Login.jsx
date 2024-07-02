import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { Authcontext } from '../../providers/Authprovider';
import { Result } from 'postcss';
const Login = () => {

    const{login}= useContext(Authcontext)
const handleLogin = event =>{
    event.preventDefault();
    const email = form.email.value;
    const password = form.password.value;

    login(email , password)

    .then(Result =>{
        console.log(Result.user)
    })

    .catch(error =>{
        console.log(error)
    })

}


    return (
        <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12">
            <img src={img} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
            <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-xl text-center font-bold">Login </h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn bg-orange-600  text-white hover:bg-orange-800">Login</button>
              </div>
            </form>

            <p className='my-4 text-center'>New to <span className='font-semibold'>DriveWell ?</span> <Link to='/register' className='link mx-2  text-orange-600'>Register</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;