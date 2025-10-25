import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { NavLink } from 'react-router';

const Profile = () => {
    const { user } = use(AuthContext);
    return (
        <div>
            <div className="min-h-screen  py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"> Profile </h1>
                        <p className="text-gray-600 text-lg">Manage your personal information</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                                <div className="text-center">
                                    <div className="relative inline-block mb-4">
                                        <div className="w-50 h-50 rounded-full bg-linear-to-r from-blue-500 to-purple-500 p-1">
                                            <img src={`${user.photoURL ? user.photoURL :"https://i.ibb.co.com/nNbBbftF/Dr-Emily-Rodriguez.webp"}`} alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-white" />
                                        </div>
                                        <div className="absolute bottom-7 right-3 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                                    </div>

                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{`${user.displayName ? user.displayName : "Null"}`}</h2>
                                    <p className="text-gray-600 mb-1">{`${user.email ? user.email : "Null"}`}</p> {/* added this function to avoid error idk is it works properly*/}

                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="bg-linear-to-r from-blue-600 to-purple-600 px-6 py-4">
                                    <div className="flex justify-between items-center">
                                        <h3 className="md:text-xl font-semibold text-white">Personal Information</h3>
                                        <NavLink to="/user/profile/edit-profile" className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors" >Edit Profile</NavLink>
                                    </div>
                                </div>

                                {/* users readable info Content */}

                                <div className="gap-6 p-5">
                                    <label className="block text-sm font-medium text-gray-700 mb-2"> Full Name </label>
                                    <h3 className='p-3 border-2 border-zinc-300 rounded-xl font-semibold'>{user.displayName ? user.displayName : "Null"}</h3>
                                    <label className="block text-sm font-medium text-gray-700 mb-2"> Email Address </label>
                                    <h3 className='p-3 border-2 border-zinc-300 rounded-xl '>{user.email ? user.email : "Null"}</h3>
                                    <label className="block text-sm font-medium text-gray-700 mb-2"> Profile Photo URL </label>
                                    <p className='p-3 border-2 border-zinc-300 rounded-xl overflow-hidden'>{user.photoURL ? user.photoURL : "Null"}</p>
                                </div>                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;