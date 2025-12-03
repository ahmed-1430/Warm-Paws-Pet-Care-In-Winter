import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API = "http://localhost:3000/api";

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        users: 0,
        bookings: 0,
        reviews: 0,
        services: 0,
    });

    const [recentBookings, setRecentBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const [countsRes, recentRes] = await Promise.all([
                    axios.get(`${API}/admin/counts`),
                    axios.get(`${API}/admin/bookings/recent?limit=5`)
                ]);

                setStats(countsRes.data);
                setRecentBookings(Array.isArray(recentRes.data) ? recentRes.data : []);
            } catch (err) {
                toast.error("Dashboard Load Error:", err);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) {
        return (
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-32 bg-gray-200 rounded-2xl"></div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="p-6">

            {/* Header */}
            <div className="mb-8">
                <h2 className="text-4xl font-extrabold bg-linear-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    Admin Dashboard Analytics
                </h2>
                <p className="text-gray-500 mt-1 text-sm">
                    Overview of system performance & latest booking activity
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Users", value: stats.users, color: "from-blue-500 to-blue-600" },
                    { label: "Total Bookings", value: stats.bookings, color: "from-purple-500 to-purple-600" },
                    { label: "Total Reviews", value: stats.reviews, color: "from-pink-500 to-pink-600" },
                    { label: "Total Services", value: stats.services, color: "from-green-500 to-green-600" },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="p-6 rounded-2xl shadow-xl bg-white/70 backdrop-blur-xl 
                                   hover:shadow-2xl border border-white/40 transition transform hover:-translate-y-1"
                    >
                        <h3 className="text-gray-500 text-sm font-medium">{item.label}</h3>
                        <p className={`text-4xl font-extrabold mt-2 bg-linear-to-r ${item.color} text-transparent bg-clip-text`}>
                            {item.value}
                        </p>
                    </div>
                ))}
            </div>

            {/* Recent Bookings */}
            <div className="mt-12 bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl p-6">
                <h3 className="text-2xl font-semibold mb-4 bg-linear-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    Recent Bookings
                </h3>

                {recentBookings.length === 0 ? (
                    <p className="text-gray-500">No bookings yet.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                                <tr>
                                    <th className="p-3 text-left">User</th>
                                    <th className="p-3 text-left">Service</th>
                                    <th className="p-3 text-left">Date</th>
                                    <th className="p-3 text-left">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {recentBookings.map((b) => (
                                    <tr key={b._id} className="border-b hover:bg-gray-100/50 transition">
                                        <td className="p-3">{b?.email || "Unknown"}</td>
                                        <td className="p-3">{b.service?.serviceName || "N/A"}</td>
                                        <td className="p-3 text-gray-600">
                                            {new Date(b.date).toLocaleDateString()}
                                        </td>
                                        <td className="p-3">
                                            <span
                                                className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm
                                                    ${b.status === "approved"
                                                        ? "bg-green-200/70 text-green-700"
                                                        : b.status === "pending"
                                                            ? "bg-yellow-200/70 text-yellow-700"
                                                            : "bg-red-200/70 text-red-700"
                                                    }
                                                `}
                                            >
                                                {b.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                )}
            </div>

        </div>
    );
};

export default AdminDashboard;
