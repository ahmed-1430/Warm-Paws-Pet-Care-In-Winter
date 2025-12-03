import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaw } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Show toast
        toast.success("Message sent successfully!", {            
            autoClose: 2000,
        });

        // Reset form
        setForm({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <div className="pt-20 pb-24 bg-linear-to-b from-blue-100 via-white to-purple-50">

            {/* HEADER */}
            <div className="text-center mb-16">
                <h1 className="text-6xl font-extrabold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow">
                    Contact WarmPaws
                </h1>
                <p className="text-gray-600 mt-4 text-lg max-w-xl mx-auto leading-relaxed">
                    We're here to help keep your furry friends safe all winter long.  
                    Reach out — we respond faster than your pet finishes treats 
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 px-6">

                {/* LEFT SIDE – CONTACT INFO */}
                <div className="space-y-10">
                    <div className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/40 transition hover:shadow-3xl">

                        <h2 className="text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-5">
                            Get In Touch
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-8">
                            Whether you have questions, feedback, or ideas — WarmPaws is always ready to connect.  
                            Your pet's winter wellness starts with a simple message.
                        </p>

                        <div className="space-y-7">

                            {/* PHONE */}
                            <div className="flex items-start gap-4 group">
                                <div className="bg-blue-100 p-4 rounded-full shadow group-hover:bg-blue-500 transition">
                                    <FaPhoneAlt className="text-blue-600 group-hover:text-white text-2xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 text-lg">Phone</h3>
                                    <p className="text-gray-600">+880 1234-567890</p>
                                </div>
                            </div>

                            {/* EMAIL */}
                            <div className="flex items-start gap-4 group">
                                <div className="bg-purple-100 p-4 rounded-full shadow group-hover:bg-purple-500 transition">
                                    <FaEnvelope className="text-purple-600 group-hover:text-white text-2xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 text-lg">Email</h3>
                                    <p className="text-gray-600">support@warmpaws.com</p>
                                </div>
                            </div>

                            {/* LOCATION */}
                            <div className="flex items-start gap-4 group">
                                <div className="bg-pink-100 p-4 rounded-full shadow group-hover:bg-pink-500 transition">
                                    <FaMapMarkerAlt className="text-pink-600 group-hover:text-white text-2xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 text-lg">Location</h3>
                                    <p className="text-gray-600">Dhaka, Bangladesh</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Brand Mini Box */}
                    <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white p-8 rounded-3xl shadow-xl text-center">
                        <FaPaw className="text-6xl mx-auto mb-3 animate-pulse" />
                        <h3 className="text-2xl font-semibold tracking-wide">
                            WarmPaws — Care Wrapped in Warmth
                        </h3>
                    </div>
                </div>

                {/* RIGHT SIDE – FORM */}
                <div className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/40 transition hover:shadow-3xl">

                    <h2 className="text-3xl font-bold mb-8 text-gray-800">Send us a Message</h2>

                    <form className="space-y-7" onSubmit={handleSubmit}>

                        {/* Name */}
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleInput}
                                required
                                className="peer w-full p-4 pt-6 border rounded-xl bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <label className="absolute top-2 left-4 text-gray-500 text-sm transition-all peer-focus:text-blue-600 peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white px-1 peer-focus:rounded">
                                Your Name
                            </label>
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleInput}
                                required
                                className="peer w-full p-4 pt-6 border rounded-xl bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <label className="absolute top-2 left-4 text-gray-500 text-sm transition-all peer-focus:text-purple-600 peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white px-1 peer-focus:rounded">
                                Email Address
                            </label>
                        </div>

                        {/* Message */}
                        <div className="relative">
                            <textarea
                                rows="6"
                                name="message"
                                value={form.message}
                                onChange={handleInput}
                                required
                                className="peer w-full p-4 pt-6 border rounded-xl bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            ></textarea>
                            <label className="absolute top-2 left-4 text-gray-500 text-sm transition-all peer-focus:text-pink-600 peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white px-1 peer-focus:rounded">
                                Message
                            </label>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
