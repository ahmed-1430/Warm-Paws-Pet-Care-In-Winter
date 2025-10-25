import React, { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ResetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
//   const [newPassword, setNewPassword] = useState('');   /* if i need it to future thats why i comment it */
//   const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    resetPassword(email)
      .then(() => {
        const from = location.state?.from?.pathname || '/user/login';
        toast.success('Password reset email sent! Check your inbox.');
        setEmail('');
        setTimeout(() => navigate(from), 1500);
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-blue-50">
      <div className="card w-full max-w-md shadow-2xl bg-white p-6 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Forgot Password</h2>
        <p className="text-center text-gray-600 mb-4">
          Enter your email address below and we’ll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Enter your email"value={email} onChange={(e) => setEmail(e.target.value)} required/>
          {/* 
          <label className="label">New Password</label>
          <div className="relative">
            <input type={showPassword ? 'text' : 'password'} className="input w-full pr-10" placeholder="Enter new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"> {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />} </button>
          </div>
          */}
          <button type="submit" className="btn btn-primary w-full mt-2">
            Send Reset Link
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Remember your password?{' '}
          <Link to="/user/login" className="link link-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
