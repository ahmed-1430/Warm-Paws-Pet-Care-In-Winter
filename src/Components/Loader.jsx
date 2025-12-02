import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center bg-white/80 backdrop-blur-xl">
      <div className="flex flex-col items-center gap-4">

        {/* SPINNER */}
        <span className="loading loading-spinner loading-lg text-blue-600"></span>
      </div>
    </div>
  );
};

export default Loader;
