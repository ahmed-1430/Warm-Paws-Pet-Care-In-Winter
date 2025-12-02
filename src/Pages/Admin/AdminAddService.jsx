import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminAddService = () => {
    const [loading, setLoading] = useState(false);
    const [service, setService] = useState({
        serviceName: "",
        providerName: "",
        providerEmail: "",
        price: "",
        rating: "",
        slotsAvailable: "",
        description: "",
        image: "",
        category: "",
    });

    const handleChange = (e) => {
        setService({ ...service, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post("http://localhost:3000/api/services", service);
            toast.success("Service added successfully!");

            // Reset fields
            setService({
                serviceName: "",
                providerName: "",
                providerEmail: "",
                price: "",
                rating: "",
                slotsAvailable: "",
                description: "",
                image: "",
                category: "",
            });

        } catch (err) {
            toast.error(`Failed to add service: ${err}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-2xl mt-8">
            <h2 className="text-3xl font-bold mb-6">Add New Service</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Service Name */}
                <div className="form-control">
                    <label className="label">Service Name</label>
                    <input
                        type="text"
                        name="serviceName"
                        value={service.serviceName}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Category */}
                <div className="form-control">
                    <label className="label">Category</label>
                    <select
                        name="category"
                        value={service.category}
                        onChange={handleChange}
                        className="select select-bordered w-full"
                        required
                    >
                        <option value="">Select Category</option>
                        <option>Clothing</option>
                        <option>Health</option>
                        <option>Exercise</option>
                        <option>Safety</option>
                        <option>Grooming</option>
                        <option>Entertainment</option>
                        <option>Other</option>
                    </select>
                </div>

                {/* Provider Name */}
                <div className="form-control">
                    <label className="label">Provider Name</label>
                    <input
                        type="text"
                        name="providerName"
                        value={service.providerName}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Provider Email */}
                <div className="form-control">
                    <label className="label">Provider Email</label>
                    <input
                        type="email"
                        name="providerEmail"
                        value={service.providerEmail}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Price */}
                <div className="form-control">
                    <label className="label">Price ($)</label>
                    <input
                        type="number"
                        name="price"
                        value={service.price}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>               
                {/* Slots Available */}
                <div className="form-control">
                    <label className="label">Slots Available</label>
                    <input
                        type="number"
                        name="slotsAvailable"
                        value={service.slotsAvailable}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Image URL */}
                <div className="form-control md:col-span-2">
                    <label className="label">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        value={service.image}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Description */}
                <div className="form-control md:col-span-2">
                    <label className="label">Description</label>
                    <textarea
                        name="description"
                        value={service.description}
                        onChange={handleChange}
                        className="textarea textarea-bordered w-full"
                        rows="4"
                        required
                    ></textarea>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="btn btn-primary md:col-span-2"
                    disabled={loading}
                >
                    {loading ? "Adding..." : "Add Service"}
                </button>

            </form>
        </div>
    );
};

export default AdminAddService;
