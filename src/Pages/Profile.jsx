import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router";
import Loader from "../Components/Loader";

// API BASE URL
const API = "http://localhost:3000/api";

const Profile = () => {
    const { user, signOutUser, userLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    const [bookings, setBookings] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cancellingId, setCancellingId] = useState(null);

    // Fetch Booking & Reviews
    useEffect(() => {
        if (!user) {
            setLoading(false);
            return;
        }

        const userId = user.uid;

        const fetchData = async () => {
            try {
                const [bRes, rRes] = await Promise.all([
                    fetch(`${API}/bookings/user/${userId}`),
                    fetch(`${API}/reviews/user/${userId}`)
                ]);

                setBookings(await bRes.json());
                setReviews(await rRes.json());
            } catch (err) {
                console.error("Load Error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [user]);

    const handleCancel = async (bookingId) => {
        if (!confirm("Cancel this booking?")) return;

        setCancellingId(bookingId);
        try {
            await fetch(`${API}/bookings/${bookingId}`, { method: "DELETE" });
            setBookings(prev => prev.filter(b => b._id !== bookingId));
        } finally {
            setCancellingId(null);
        }
    };

    if (userLoading) return <div className="text-center py-12">Loading User...</div>;

    if (!user)
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="max-w-md bg-white p-8 rounded-2xl shadow-xl text-center">
                    <h2 className="text-2xl font-bold">You Are Not Logged In</h2>
                    <p className="text-gray-500 mt-2">Please login to continue.</p>
                    <button
                        onClick={() => navigate("/user/login")}
                        className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Login
                    </button>
                </div>
            </div>
        );

    return (
        <div className="min-h-screen py-15">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* ---------------- LEFT COLUMN ---------------- */}
                <div className="col-span-1">
                    <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/40 hover:shadow-xl transition">
                        <div className="flex flex-col items-center">

                            <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                                <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
                            </div>

                            <h3 className="text-xl font-bold mt-4">{user.displayName}</h3>
                            <p className="text-gray-500">{user.email}</p>

                            <div className="grid grid-cols-3 w-full text-center mt-6">
                                <div>
                                    <h3 className="text-lg font-bold">{bookings.length}</h3>
                                    <p className="text-gray-500 text-sm">Bookings</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">
                                        {bookings.filter(b => b.status == "pending" || "Pending").length}
                                    </h3>
                                    <p className="text-gray-500 text-sm">Pending</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">
                                        {bookings.filter(b => b.status == "approved").length}
                                    </h3>
                                    <p className="text-gray-500 text-sm">Completed</p>
                                </div>
                            </div>

                            <button onClick={() => navigate("/user/profile/edit-profile")} className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer">Edit Profile</button>

                            <button onClick={async () => { await signOutUser(); navigate("/"); }} className="mt-2 w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer"
                            >
                                Logout
                            </button>

                        </div>
                    </div>
                </div>

                {/* ---------------- RIGHT COLUMN ---------------- */}
                <div className="col-span-3 space-y-6">

                    {/* BOOKINGS ---------------- */}
                    <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/40">
                        <h3 className="text-xl font-semibold mb-4">Your Bookings</h3>

                        {loading ? (
                            <div className="text-center py-6"> <Loader></Loader> </div>
                        ) : bookings.length === 0 ? (
                            <div className="text-center py-6 text-gray-500">No bookings yet.</div>
                        ) : (
                            <div className="overflow-x-auto rounded-xl border border-gray-200">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-gray-50 text-gray-600 text-sm border-b">
                                            <th className="py-3 px-4">Service</th>
                                            <th className="py-3 px-4">Date</th>
                                            <th className="py-3 px-4">Price</th>
                                            <th className="py-3 px-4">Status</th>
                                            <th className="py-3 px-4">Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {bookings.map(b => (
                                            <tr key={b._id} className="hover:bg-gray-50 transition">
                                                <td className="py-3 px-4">
                                                    <div className="flex items-center gap-3">
                                                        <img
                                                            src={b.service?.image}
                                                            className="w-12 h-12 rounded-lg object-cover"
                                                        />
                                                        <div>
                                                            <p className="font-semibold">{b.service?.serviceName}</p>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="py-3 px-4">
                                                    {new Date(b.date).toLocaleString()}
                                                </td>

                                                <td className="py-3 px-4 font-medium">
                                                    ${b.service?.price}
                                                </td>

                                                <td className="py-3 px-4">
                                                    <span
                                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${b.status === "completed"
                                                            ? "bg-blue-100 text-blue-700"
                                                            : b.status === "confirmed"
                                                                ? "bg-green-100 text-green-700"
                                                                : "bg-yellow-100 text-yellow-700"
                                                            }`}
                                                    >
                                                        {b.status}
                                                    </span>
                                                </td>

                                                <td>
                                                    <div className="flex items-center gap-4">
                                                        <button disabled={cancellingId == b._id} onClick={() => handleCancel(b._id)} className="px-3 py-1 cursor-pointer text-sm rounded border border-red-300 text-red-600 hover:bg-red-50">{cancellingId === b._id ? "…" : "Cancel"}</button>
                                                        <button onClick={() => navigate(`/services/category/${b.service._id}`)} className="px-3 py-1 text-sm rounded border cursor-pointer border-gray-300 hover:bg-gray-100">View</button>
                                                    </div>
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        )}
                    </div>

                    {/* REVIEWS ---------------- */}
                    <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/40">
                        <h3 className="text-xl font-semibold mb-4">Your Reviews</h3>

                        {loading ? (
                            <div className="text-center py-6"> <Loader></Loader> </div>
                        ) : reviews.length === 0 ? (
                            <div className="text-center py-6 text-gray-500">No reviews yet.</div>
                        ) : (
                            <div className="grid gap-5">
                                {reviews.map(r => (
                                    <div key={r._id} className="p-6 rounded-2xl border border-gray-100 bg-white/70 backdrop-blur-xl shadow-md hover:shadow-2xl transition-all duration-300">
                                        {/* HEADER */}
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <h4 className="text-xl font-semibold text-gray-800">
                                                    {r.service?.serviceName}
                                                </h4>

                                                <p className="text-gray-500 text-sm mt-1">
                                                    Reviewed on {new Date(r.createdAt).toLocaleDateString()}
                                                </p>
                                            </div>

                                            {/* RATING BADGE */}
                                            <div className="flex items-center gap-1 bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
                                                ⭐ {r.rating}
                                            </div>
                                        </div>

                                        {/* Reviewed message */}
                                        <p className="mt-3 text-gray-700 leading-relaxed text-md font-semibold tracking-wide">
                                            {r.message}
                                        </p>

                                        {/* FOOTER */}
                                        <div className="mt-5 flex justify-between items-center">

                                            {/* SERVICE LINK */}
                                            <button onClick={() => navigate(`/services/category/${r.service?._id}`)} className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 hover:shadow-md transition-all text-sm cursor-pointer">View Service</button>

                                            {/* Optional icon (heart, bookmark, more, etc.) if upgrade it future now just for showcase */}
                                            <div className="text-gray-400 text-lg cursor-pointer hover:text-gray-600 transition">
                                                ⋮
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
