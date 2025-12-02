import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Booking = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch service details
  useEffect(() => {
    const loadService = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/services/${serviceId}`);
        const data = await res.json();
        setService(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadService();
  }, [serviceId]);

  // Handle Confirm Booking
  const handleBooking = async () => {
    if (!user) {
      toast.error("Please login first!");
      navigate("/user/login");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.uid,
          email: user.email,
          serviceId: serviceId,
          status: "Pending",
          date: new Date().toISOString()
        }),
      });

      if (!response.ok) throw new Error("Booking failed");

      toast.success("Booking successful!");
      navigate("/user/profile");

    } catch (error) {
      toast.error("Error: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user)
    return (
      <div className="max-w-xl mx-auto text-center py-16">
        <h1 className="text-2xl font-bold text-red-500 mb-3">Access Denied</h1>
        <p className="text-gray-600">Please login to book a service.</p>
      </div>
    );

  if (loading)
    return <div className="text-center py-10 text-lg font-medium">Loading...</div>;

  if (!service)
    return <div className="text-center py-10 text-red-500">Service not found!</div>;

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Confirm Your Booking</h1>

      <div className="bg-white rounded-xl shadow p-6">
        {/* Service Info */}
        <div className="flex gap-4 items-start mb-6">
          <img
            src={service.image}
            alt={service.name}
            className="w-32 h-32 rounded-xl object-cover border"
          />
          <div>
            <h2 className="text-xl font-bold">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
            <p className="text-lg font-semibold mt-2 text-blue-600">
              ${service.price}
            </p>
          </div>
        </div>

        {/* User Info */}
        <div className="bg-gray-50 p-4 rounded-lg border mb-6">
          <p><strong>User:</strong> {user?.displayName || "Unknown User"}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleBooking}
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-medium transition cursor-pointer"
        >
          {isSubmitting ? "Booking..." : "Confirm Booking"}
        </button>
      </div>
    </div>
  );
};

export default Booking;
