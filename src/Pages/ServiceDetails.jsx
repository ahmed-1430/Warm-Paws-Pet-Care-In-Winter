import React from 'react';
import { Navigate, useLoaderData, useParams } from 'react-router';

const ServiceDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    console.log(data, id)
    const service = data.find((ser => ser.serviceId == id))

    if(!service){
        <Navigate to="/services"></Navigate>
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    };
    return (

        <div className='w-11/12 mx-auto'>
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className='flex flex-1'>
                        <div className="card bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src={service.image}
                                    alt={service.serviceName}
                                    className="w-full h-96 object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <h1 className="card-title text-3xl">{service.serviceName}</h1>
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
                                    <span className="ml-2 text-lg">({service.rating})</span>
                                </div>
                                <p className="text-2xl font-bold text-primary mb-4">${service.price}</p>
                                <p className="text-lg mb-4">{service.description}</p>

                                <div className="space-y-2">
                                    <p><strong>Provider:</strong> {service.providerName}</p>
                                    <p><strong>Email:</strong> {service.providerEmail}</p>
                                    <p><strong>Category:</strong> {service.category}</p>
                                    <p><strong>Available Slots:</strong> {service.slotsAvailable}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div>
                        <div className="card bg-base-100 h-full shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-2xl lg:text-4xl mb-6">Book This Service</h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <fieldset className="fieldset">
                                        <label className="label">Name</label>
                                        <input type="text" className="input w-full" placeholder="Enter Your Name" />
                                        <label className="label">Email</label>
                                        <input type="email" className="input w-full" placeholder="Enter Your Email" />                                        
                                        <button className="btn btn-neutral mt-4">Login</button>
                                    </fieldset>
                                </form>

                                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                                    <h3 className="font-bold text-lg mb-2">What to Expect:</h3>
                                    <ul className="list-disc pl-5 space-y-1">
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
            </div>
        </div>
    );
};

export default ServiceDetails;