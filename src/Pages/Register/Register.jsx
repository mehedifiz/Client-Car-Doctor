import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { Authcontext } from '../../providers/Authprovider';
const Register = () => {

    const {createuser} = useContext(Authcontext)
    const handleRegister = event =>{
        event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const confrimPassword = form.confrimPassword.value;

            createuser(email , password )
            .then(result =>{
                console.log(result.user)
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
            <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-xl text-center font-bold">Register</h1>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="Name" name='name' placeholder="Name" className="input input-bordered" required />
              </div>

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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">confrim Password</span>
                </label>
                <input type="Password" name='confrimPassword' placeholder="confrimPassword" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn bg-orange-600  text-white hover:bg-orange-800">Register</button>
              </div>
            </form>

            <p className='my-4 text-center'>Already Have An Account ?<Link to='/login' className='link mx-2  text-orange-600'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;