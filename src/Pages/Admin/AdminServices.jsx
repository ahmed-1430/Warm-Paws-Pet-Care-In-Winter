import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";
import LoadingPage from "../Loading";

const API = "http://localhost:3000/api";

const AdminServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    console.log(services)
 

    // Modal states
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const loadServices = async () => {
            try {
                const res = await fetch(`${API}/services`);
                const data = await res.json();

                if (!Array.isArray(data)) {
                    setError("Invalid service data");
                    return;
                }

                setServices(data);
            } catch (err) {
                toast.error(`Failed to load services ${err}`);
            } finally {
                setLoading(false);
            }
        };

        loadServices();
    }, []);

    const openDeleteModal = (service) => {
        setSelectedService(service);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedService(null);
    };

    const confirmDelete = async () => {
        if (!selectedService) return;

        setDeleting(true);

        try {
            await fetch(`${API}/services/${selectedService._id}`, { method: "DELETE" });

            setServices((prev) => prev.filter((s) => s._id !== selectedService._id));
            toast.success("Service deleted successfully!");
            closeModal();
        } catch (err) {
            toast.error(`Delete failed! ${err}`);
        }

        setDeleting(false);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Manage Services</h2>

            {/* Loading */}
            {loading && (
                <div className="p-6 text-center text-gray-500"> <LoadingPage/> </div>
            )}

            {/* Error */}
            {error && (
                <div className="p-4 bg-red-100 text-red-600 rounded-lg mb-4">{error}</div>
            )}

            {/* Empty */}
            {!loading && services.length === 0 && (
                <div className="p-6 text-center text-gray-500 bg-white rounded-xl shadow">
                    No services found.
                </div>
            )}

            {/* Services Table */}
            {services.length > 0 && (
                <div className="border rounded-xl overflow-hidden bg-white shadow">
                    <table className="w-full">
                        <thead className="bg-gray-100 text-gray-600 text-sm">
                            <tr>
                                <th className="p-3 text-left">Image</th>
                                <th className="p-3 text-left">Name</th>
                                <th className="p-3 text-left">Price</th>
                                <th className="p-3 text-left">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {services.map((s) => (
                                <tr
                                    key={s._id}
                                    className="border-b hover:bg-gray-50 transition"
                                >
                                    <td className="p-3">
                                        <img
                                            src={s.image}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                    </td>

                                    <td className="p-3 font-medium">{s.serviceName}</td>

                                    <td className="p-3 font-semibold text-gray-700">
                                        ${s.price}
                                    </td>

                                    <td className="p-3 space-x-2">
                                        <button className="px-3 py-1 rounded bg-blue-500 text-white cursor-pointer hover:bg-blue-600">
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => openDeleteModal(s)}
                                            className="px-3 py-1 rounded bg-red-500 text-white cursor-pointer hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* DELETE CONFIRMATION MODAL */}
            {showModal && selectedService && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl shadow-lg w-96 p-6 animate-fadeIn">
                        <h2 className="text-xl font-semibold mb-3">Confirm Delete</h2>

                        <p className="text-gray-600 mb-6">
                            Are you sure you want to delete{" "}
                            <span className="font-semibold text-black">
                                {selectedService.serviceName}
                            </span>
                            ?
                        </p>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 rounded-lg border hover:bg-gray-100 cursor-pointer"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={confirmDelete}
                                disabled={deleting}
                                className="px-4 py-2 cursor-pointer rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
                            >
                                {deleting ? "Deleting…" : "Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminServices;
