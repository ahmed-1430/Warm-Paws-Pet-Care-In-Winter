import React, { useState, useEffect, use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const EditProfile = () => {
    const { user, updateUser, setUser } = use(AuthContext);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    useEffect(() => {
        if (user) {
            setName(user.displayName || '');
            setEmail(user.email || '');
            setPhotoURL(user.photoURL || '');
        }
    }, [user]);
    const handleSaveChanges = (e) => {
        e.preventDefault();
        if (!name || !email) {
            toast.error('Name and Email are required');
            return;
        }

        updateUser({ displayName: name, photoURL })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL });
                toast.success('Profile updated successfully ✅');
                setTimeout(() => {
                    navigate('/user/profile');
                }, 1500);
            })
            .catch((error) => {
                console.error(error);
                toast.error(`Failed to update profile: ${error.message}`);
            });
    };
    return (
        <div className='my-15'>
            <div className="md:w-8/12 lg:w-6/12 mx-auto">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-linear-to-r from-blue-600 to-purple-600 px-6 py-4">
                        <div className="flex justify-between items-center">
                            <h3 className="md:text-xl font-semibold text-white">Personal Information</h3>
                            <NavLink to="/user/profile" className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                                Back to Profile
                            </NavLink>
                        </div>
                    </div>
                    {/* users Editable info Content */}
                    <form onSubmit={handleSaveChanges} className="gap-6 p-5 space-y-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2"> Full Name </label>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="Enter Your Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label className="block text-sm font-medium text-gray-700 mb-2"> Email Address </label>
                        <input type="email" className="input w-full" placeholder="Enter Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} disabled/>
                        <label className="block text-sm font-medium text-gray-700 mb-2"> Profile Photo URL </label>
                        <input type="text" className="input w-full" placeholder="Enter Your Photo URL" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)}/>
                        <div className='flex justify-end pt-3'>
                            <button type="submit" className='btn btn-primary'>Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
