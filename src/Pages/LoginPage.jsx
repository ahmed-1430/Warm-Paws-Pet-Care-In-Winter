import { useState, use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
  const { loginUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  //  password toggle functionsssss
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(() => {
        const from = location.state?.from?.pathname || '/';
        toast.success('Successfully Logged In ✅');
        setTimeout(() => {
          navigate(from);
        }, 1500);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        toast.error(errorCode);
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
              <input type="email" className="input w-full" name="email"placeholder="Email" required/>
              <label className="label">Password</label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} className="input w-full pr-10" name="password" placeholder="Password" required/>
                {/* password Toggle Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4 w-full"> Login </button>
            </fieldset>
          </form>
          <div className="divider">OR</div>
          <div className="form-control flex justify-center">
            <button className="btn btn-outline btn-primary">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
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
