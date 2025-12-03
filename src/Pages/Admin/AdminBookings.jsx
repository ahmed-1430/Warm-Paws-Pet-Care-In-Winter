import { useEffect, useState } from "react";

const API = "http://localhost:3000/api";

const AdminBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updatingId, setUpdatingId] = useState(null);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    const loadBookings = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API}/admin/bookings`);
            const data = await res.json();
            setBookings(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadBookings();
    }, []);

    const updateStatus = async (id, newStatus) => {
        setUpdatingId(id);
        try {
            await fetch(`${API}/bookings/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus }),
            });
            loadBookings();
        } catch (err) {
            console.error(err);
        } finally {
            setUpdatingId(null);
        }
    };

    const filteredBookings = bookings.filter((b) => {
        const matchesSearch =
            b.service?.email?.toLowerCase().includes(search.toLowerCase()) ||
            b.service?.serviceName
                ?.toLowerCase()
                .includes(search.toLowerCase());

        const matchesFilter =
            filter === "all" ? true : b.status === filter;

        return matchesSearch && matchesFilter;
    });

    if (loading) {
        return (
            <div className="p-6">
                <div className="animate-pulse grid gap-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-16 bg-gray-300/40 rounded-xl"></div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="p-6">
            {/* HEADER */}
            <div className="mb-8">
                <h2 className="text-4xl font-extrabold bg-linear-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    Admin Booking Management
                </h2>
                
            </div>

            {/* Search + Filter Row */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search bookings..."
                    className="px-4 py-2.5 border bg-white/70 backdrop-blur-lg shadow-sm rounded-xl w-72 outline-none focus:ring-2 focus:ring-blue-400 transition"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    className="px-4 py-2.5 border bg-white/70 backdrop-blur-lg rounded-xl outline-none shadow-sm focus:ring-2 focus:ring-purple-400 transition"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">All Bookings</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                </select>
            </div>

            {/* Table Container */}
            <div className="bg-white/60 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden border border-white/30">
                <table className="w-full">
                    <thead className="bg-linear-to-r from-blue-50 to-purple-50 text-gray-700 text-sm uppercase tracking-wide">
                        <tr>
                            <th className="p-4 text-left">User</th>
                            <th className="p-4 text-left">Service</th>
                            <th className="p-4 text-left">Date</th>
                            <th className="p-4 text-left">Status</th>
                            <th className="p-4 text-left">Action</th>
                        </tr>
                    </thead>

                    <tbody className="backdrop-blur-xl">
                        {filteredBookings.map((b) => (
                            <tr
                                key={b._id}
                                className="border-b hover:bg-gray-100/40 transition-all"
                            >
                                <td className="p-4 font-medium text-gray-800">
                                    {b?.email}
                                </td>

                                <td className="p-4 text-gray-700">
                                    {b.service?.serviceName}
                                </td>

                                <td className="p-4 text-gray-600">
                                    {new Date(b.date).toLocaleDateString()}
                                </td>

                                <td className="p-4">
                                    <span
                                        className={`
                                            px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md shadow-sm
                                            ${
                                                b.status === "pending"
                                                    ? "bg-yellow-200/60 text-yellow-700"
                                                    : b.status === "approved"
                                                    ? "bg-green-200/60 text-green-700"
                                                    : "bg-red-200/60 text-red-700"
                                            }
                                        `}
                                    >
                                        {b.status}
                                    </span>
                                </td>

                                <td className="p-4 space-x-2">
                                    <button
                                        disabled={updatingId === b._id}
                                        onClick={() =>
                                            updateStatus(b._id, "approved")
                                        }
                                        className="px-3 py-1.5 rounded-lg text-sm 
                                        bg-green-600 text-white hover:bg-green-700 
                                        disabled:opacity-50 transition-all shadow-sm cursor-pointer"
                                    >
                                        Approve
                                    </button>

                                    <button
                                        disabled={updatingId === b._id}
                                        onClick={() =>
                                            updateStatus(b._id, "rejected")
                                        }
                                        className="px-3 py-1.5 rounded-lg text-sm 
                                        bg-red-600 text-white hover:bg-red-700 
                                        disabled:opacity-50 transition-all shadow-sm cursor-pointer"
                                    >
                                        Reject
                                    </button>

                                    <button
                                        disabled={updatingId === b._id}
                                        onClick={() =>
                                            updateStatus(b._id, "pending")
                                        }
                                        className="px-3 py-1.5 rounded-lg text-sm 
                                        bg-gray-700 text-white hover:bg-gray-800 
                                        disabled:opacity-50 transition-all shadow-sm cursor-pointer"
                                    >
                                        Reset
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {filteredBookings.length === 0 && (
                    <div className="text-center p-6 text-gray-500 font-medium">
                         No matching bookings found
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminBookings;
