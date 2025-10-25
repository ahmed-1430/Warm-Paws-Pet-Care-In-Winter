import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
  const { loginUser, signUpWithGoogle, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        const from = location.state?.from?.pathname || '/';
        toast.success('Successfully Logged In ');
        setTimeout(() => navigate(from), 1500);
      })
      .catch((error) => {
        console.error(error);
        toast.error(`Login failed: ${error.code}`);
      });
  };

  const handleLoginWithGoogle = () => {
    signUpWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success(`Welcome, ${user.displayName || 'User'}!`);
        setTimeout(() => navigate('/'), 1500);
      })
      .catch((error) => {
        console.error(error);
        toast.error(`Google Sign-in failed: ${error.message}`);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="card w-full max-w-md shadow-2xl bg-base-200 border-2 border-zinc-200">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold justify-center mb-6">Login</h2>

          <form onSubmit={handleLogin} className="space-y-4 w-full">
            <fieldset className="fieldset w-full">
              <label className="label">Email</label>
              <input type="email" className="input w-full" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              <label className="label">Password</label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} className="input w-full pr-10" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-500 hover:text-gray-700">
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
              <div className="mt-1">
                <Link to="/user/reset-password" className="link link-hover" state={{ email }}> Forgot password?</Link>
              </div>
              <button type="submit" className="btn btn-neutral mt-4 w-full"> Login </button>
            </fieldset>
          </form>
          <div className="divider">OR</div>
          <div className="form-control flex justify-center">
            <button onClick={handleLoginWithGoogle} className="btn btn-outline btn-primary">
              Continue with Google
            </button>
          </div>
          <p className="text-center mt-4">
            Don’t have an account?{' '}
            <Link to="/user/register" className="link link-primary">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
