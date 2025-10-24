import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Profile = () => {
    const {user} = use(AuthContext);
    return (
        <div>
            <div className="min-h-screen  py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                            Profile Settings
                        </h1>
                        <p className="text-gray-600 text-lg">Manage your personal information and preferences</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                                <div className="text-center">
                                    <div className="relative inline-block mb-4">
                                        <div className="w-50 h-50 rounded-full bg-linear-to-r from-blue-500 to-purple-500 p-1">
                                            <img src={user.photo} alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-white" />
                                        </div>
                                        <div className="absolute bottom-7 right-3 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                                    </div>

                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{user.name}</h2>
                                    <p className="text-gray-600 mb-1">{`Ahmed@mail.com`}</p>
                                    
                                </div>
                            </div>
                        </div>

                        {/* Main Content - Edit Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                {/* Form Header */}
                                <div className="bg-linear-to-r from-blue-600 to-purple-600 px-6 py-4">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-semibold text-white">Personal Information</h3>
                                        <button                                            
                                            className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors" >Edit Profile</button>
                                    </div>
                                </div>

                                {/* Form Content */}
                                <form className="p-6 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name
                                            </label>
                                            <input type="text" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"/>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">                                                Email Address
                                            </label>
                                            <input type="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"/>
                                        </div>
                                    </div>                                 
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Profile Photo URL
                                        </label>
                                        <input type="url" name="photoURL" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"/>
                                    </div>                                    
                                        <div className="flex justify-end space-x-4 pt-6 border-t">
                                            <button
                                                type="button"
                                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
                                            >
                                                Discard Changes
                                            </button>
                                            <button
                                                type="submit"
                                                className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-semibold shadow-lg hover:shadow-xl"
                                            >
                                                Save Changes
                                            </button>
                                        </div>                                
                                </form>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;