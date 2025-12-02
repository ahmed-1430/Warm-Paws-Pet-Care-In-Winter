import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [service, setService] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [user, setUser] = useState(null);

  // Load logged-in user
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  // Fetch service + reviews
  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/services/${id}`);
      const data = await res.json();
      setService(data);

      const revRes = await fetch(`http://localhost:3000/api/reviews/service/${id}`);
      const revData = await revRes.json();
      setReviews(revData.reverse()); // newest first
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  // Submit review
  const handleAddReview = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login to post a review");
      navigate("/user/login");
      return;
    }

    if (!reviewText.trim()) return;

    try {
      await fetch("http://localhost:3000/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId: id,
          userId: user.uid,
          userName: user.displayName,
          message: reviewText,
          createdAt: new Date(),
        }),
      });

      toast.success("Review added successfully");

      setReviewText("");
      fetchData(); // refresh review list

    } catch (err) {
      toast.error("Failed to add review");
    }
  };

  // Booking
  const handleBooking = () => {
    if (!user) {
      toast.error("Please login to book this service");
      navigate("/user/login");
      return;
    }
    navigate(`/booking/${id}`);
  };

  if (!service) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="w-11/12 mx-auto my-10">
      {/* Service Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        <div className="lg:col-span-2">
          <img
            src={service.image}
            alt={service.serviceName}
            className="rounded-xl shadow-lg w-full h-96 object-fit"
          />

          <h1 className="text-4xl font-bold mt-5">{service.serviceName}</h1>
          <p className="text-gray-700 text-lg mt-2">{service.description}</p>

          <p className="text-3xl font-semibold text-primary mt-4">
            ${service.price}
          </p>

          <button
            onClick={handleBooking}
            className="btn btn-primary mt-4 px-6 py-2 text-lg"
          >
            Book Now
          </button>
        </div>

        {/* Reviews */}
        <div>
          <h2 className="text-2xl font-bold mb-4">⭐ Customer Reviews</h2>

          <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2">
            {reviews.length === 0 ? (
              <p className="text-gray-500">No reviews yet.</p>
            ) : (
              reviews.map((rev) => (
                <div key={rev._id} className="p-4 rounded-lg bg-gray-100 shadow">
                  <p className="font-semibold">{rev.userName}</p>
                  <p className="text-gray-700">{rev.message}</p>
                </div>
              ))
            )}
          </div>

          {/* Add Review */}
          {user ? (
            <form onSubmit={handleAddReview} className="mt-6">
              <textarea
                className="w-full border p-3 rounded-lg"
                rows="3"
                placeholder="Write your review..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              ></textarea>

              <button
                type="submit"
                className="btn btn-success w-full mt-3"
              >
                Submit Review
              </button>
            </form>
          ) : (
            <p className="text-gray-600 mt-4 text-sm">
              Please login to post a review.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
