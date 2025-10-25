import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const RegisterPage = () => {
    const {createUser, setUser, updateUser} = use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        
        if(name.length < 4 ){
            toast.error('Name At least 4 character')
            return;
        }
        
        console.log({name, photo, email, password})
    
    // Check uppercase
    if (!/(?=.*[A-Z])/.test(password)) {
      toast.error('Must have at least one uppercase letter');
      return
    }
    
    // Check lowercase
    if (!/(?=.*[a-z])/.test(password)) {
      toast.error('Must have at least one lowercase letter');
      return
    }
    
    // Check length
    if (password.length < 6) {
      toast.error('Must be at least 6 characters long');
      return
    }
    createUser(email, password)
    .then((result)=> {
        const user = result.user;
        updateUser({displayName: name, photoURL: photo})
        .then(()=>{
            setUser({...user, displayName: name, photoURL: photo})
            toast.success('Successfully Register')
        .catch(()=>{
            // console.log(error)
            setUser(user)
            })
        })
    })
      
}
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center py-12">
                <div className="card w-full max-w-md shadow-2xl bg-base-100">
                    <div className="card-body bg-base-200 border border-zinc-200">
                        <h2 className="card-title text-3xl font-bold justify-center mb-6">Sign Up</h2>

                        <form onSubmit={handleRegister} className="space-y-4">
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" className="input w-full" name='name' placeholder="Enter Your Name" />
                                <label className="label">Photo URL</label>
                                <input type="text" className="input w-full" name='photoURL' placeholder="Enter your Photo URL" />
                                <label className="label">Email</label>
                                <input type="email" className="input w-full" name='email' placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input w-full" name='password' placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>

                        <div className="divider">OR</div>

                        <div className="form-control flex justify-center">
                            <button
                                className="btn btn-outline btn-primary"
                            >
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Sign up with Google
                            </button>
                        </div>

                        <p className="text-center mt-4">
                            Already have an account?{' '}
                            <Link to="/user/login" className="link link-primary">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;