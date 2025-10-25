import React from 'react';
import { NavLink } from 'react-router';

const EditProfile = () => {
    return (
        <div className='my-15'>
            <div className="md:w-8/12 lg:w-6/12 mx-auto">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-linear-to-r from-blue-600 to-purple-600 px-6 py-4">
                        <div className="flex justify-between items-center">
                            <h3 className="md:text-xl font-semibold text-white">Personal Information</h3>
                            <NavLink to="/user/profile" className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors" >Back to Profile</NavLink>
                        </div>
                    </div>

                    {/* users Editable info Content */}

                    <div className="gap-6 p-5 space-y-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2"> Full Name </label>
                        <input type="text" className="input w-full" placeholder="Enter Your Full Name" />
                        <label className="block text-sm font-medium text-gray-700 mb-2"> Email Address </label>
                        <input type="email" className="input w-full" placeholder="Enter Your Email Address" />
                        <label className="block text-sm font-medium text-gray-700 mb-2"> Profile Photo URL </label>
                        <input type="text" className="input w-full" placeholder="enter Your Photo URL" />
                        <div className='flex justify-end pt-3'>
                            <button className='btn btn-primary'>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EditProfile;