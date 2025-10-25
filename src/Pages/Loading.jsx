import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-300">
      <div className="text-center">
        
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h1 className="text-white text-3xl font-bold mb-2 animate-pulse">Loading Services...</h1>
        <p className="text-white/80 text-lg"> Please wait while we fetch the best services for you</p>
      </div>
      <div className="absolute bottom-10 flex space-x-2">
        <span className="w-3 h-3 bg-white rounded-full animate-bounce delay-75"></span>
        <span className="w-3 h-3 bg-white rounded-full animate-bounce delay-150"></span>
        <span className="w-3 h-3 bg-white rounded-full animate-bounce delay-200"></span>
      </div>
    </div>
  );
};

export default LoadingPage;
