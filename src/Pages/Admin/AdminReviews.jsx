import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const API = "http://localhost:3000/api";

const renderStars = (rating) => {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => {
                const full = i + 1 <= Math.floor(rating);
                const half = !full && i < rating;
                return (
                    <span key={i} className="text-yellow-500 text-lg">
                        {full ? "★" : half ? "⯪" : "☆"}
                    </span>
                );
            })}
        </div>
    );
};

const AdminReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleteId, setDeleteId] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const load = async () => {
            try {
                const res = await fetch(`${API}/admin/reviews`);
                const data = await res.json();
                setReviews(Array.isArray(data) ? data : []);
            } catch (err) {
                toast.error("Review load error:", err);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, []);

    const deleteReview = async (id) => {
        if (!confirm("Delete this review?")) return;

        setDeleteId(id);

        try {
            const res = await fetch(`${API}/reviews/${id}`, { method: "DELETE" });

            if (!res.ok) throw new Error("Delete failed");

            setReviews((prev) => prev.filter((r) => r._id !== id));
        } catch (err) {
            toast.error("Error deleting review");
            console.error(err);
        } finally {
            setDeleteId(null);
        }
    };

    if (loading) return <div className="p-6">Loading reviews…</div>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Manage Reviews</h1>

            <div className="grid gap-4">
                {reviews.map((r) => (
                    <div
                        key={r._id}
                        className="p-5 rounded-2xl border bg-white shadow-sm hover:shadow-lg transition"
                    >
                        <div className="flex items-start justify-between">

                            {/* Left */}
                            <div>
                                <h3 className="text-lg font-semibold">{r.service?.serviceName}</h3>

                                <p className="text-gray-500 text-sm">
                                    By <span className="font-medium">{r.userName || "Unknown User"}</span>
                                </p>

                                <p className="text-sm text-gray-400">
                                    {new Date(r.createdAt).toLocaleDateString()}
                                </p>
                            </div>

                            {/* Rating */}
                            <div>{renderStars(r.rating)}</div>
                        </div>

                        {/* Comment */}
                        <p className="mt-3 text-gray-700 leading-relaxed">
                            {r.comment || r.message}
                        </p>

                        {/* Actions */}
                        <div className="flex gap-3 mt-4">
                            <button onClick={() => navigate(`/services/category/${r?.serviceId}`)} className="px-4 py-1.5 text-sm border rounded-lg hover:bg-gray-100 cursor-pointer">
                                View Service
                            </button>

                            <button
                                onClick={() => deleteReview(r._id)}
                                className="px-4 py-1.5 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer"
                            >
                                {deleteId === r._id ? "Deleting…" : "Delete"}
                            </button>
                        </div>
                    </div>
                ))}

                {reviews.length === 0 && (
                    <p className="text-gray-500 text-center py-6 italic">
                        No reviews available.
                    </p>
                )}
            </div>
        </div>
    );
};

export default AdminReviews;
