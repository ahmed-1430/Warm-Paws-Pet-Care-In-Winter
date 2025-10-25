import React from 'react';
import { Navigate, useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';

const ServiceDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const service = data.find((ser) => ser.serviceId == id);

    if (!service) {
        return <Navigate to="/services" />;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Service booked successfully');
        e.target.reset();
    };
    return (
        <div className="w-11/12 mx-auto my-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Service Info Card */}
                <div className="lg:col-span-2">
                    <div className="card shadow-xl bg-white rounded-2xl overflow-hidden">
                        <figure className="h-96 overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.serviceName}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </figure>
                        <div className="card-body p-6">
                            <h1 className="text-4xl font-bold mb-3">{service.serviceName}</h1>

                            {/* Rating */}
                            <div className="flex items-center mb-4">
                                <div className="rating rating-md">
                                    {[...Array(5)].map((_, i) => (
                                        <input
                                            key={i}
                                            type="radio"
                                            name={`rating-${service.serviceId}`}
                                            className="mask mask-star-2 bg-orange-400"
                                            checked={i < Math.floor(service.rating)}
                                            readOnly
                                        />
                                    ))}
                                </div>
                                <span className="ml-3 text-lg text-gray-600">({service.rating})</span>
                            </div>

                            <p className="text-3xl font-semibold text-primary mb-4">${service.price}</p>
                            <p className="text-lg text-gray-700 mb-6">{service.description}</p>

                            {/* Provider Info */}
                            <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-600">Provider</p>
                                    <p className="text-gray-800">{service.providerName}</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-600">Email</p>
                                    <p className="text-gray-800">{service.providerEmail}</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-600">Category</p>
                                    <p className="text-gray-800">{service.category}</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-600">Available Slots</p>
                                    <p className="text-gray-800">{service.slotsAvailable}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Booking Form */}
                <div>
                    <div className="card shadow-xl bg-white rounded-2xl p-6 sticky top-6">
                        <h2 className="text-2xl font-bold mb-6">Book This Service</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <label className="label">Name</label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="input w-full"
                                required
                            />
                            <label className="label">Email</label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="input w-full"
                                required
                            />
                            <button type="submit" className="btn btn-primary w-full mt-2">
                                Book Now
                            </button>
                        </form>

                        <div className="mt-8 bg-blue-50 p-5 rounded-lg">
                            <h3 className="font-semibold text-lg mb-2">What to Expect:</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>Confirmation email within 24 hours</li>
                                <li>Service duration: 1-2 hours</li>
                                <li>Bring your pet's vaccination records</li>
                                <li>Cancel up to 24 hours before for full refund</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
