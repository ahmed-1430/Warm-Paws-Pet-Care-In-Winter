"use client";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black text-white px-6">
      
      {/* Floating Glow Circle */}
      <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full -top-10 -left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full -bottom-10 -right-10 animate-pulse"></div>

      {/* 404 Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-8xl font-extrabold tracking-widest bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-500 drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-gray-300 mt-3"
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

      {/* Extra Line */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-sm text-gray-400 mt-1"
      >
        Maybe it was moved… or maybe you discovered a glitch in the matrix.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8"
      >
        <Link
          to={"/"}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <FaArrowLeft size={20} />
          Back to Home
        </Link>
      </motion.div>

      {/* Floating Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-14 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-6 py-4 shadow-xl"
      >
        <p className="text-sm text-gray-300">
          Looking for something specific?  
          <Link to={"/contact"} className="text-blue-400 hover:underline ml-1">
            Contact Support
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
export default ErrorPage;
