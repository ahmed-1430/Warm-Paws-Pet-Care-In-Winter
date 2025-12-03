import { FaPaw, FaShieldAlt, FaSnowflake, FaUsers, FaRocket } from "react-icons/fa";

const About = () => {
    return (
        <div className="pt-28 w-11/12 mx-auto pb-20 bg-linear-to-b from-blue-50 to-white">

            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow-sm">
                    About <span className="text-blue-600">WarmPaws</span>
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Your trusted winter companion for keeping pets healthy, warm, and protected.
                    Smart features, beautiful UI, and a modern experience built for pet lovers.
                </p>
            </div>

            {/* Big Feature Highlight Card */}
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

                {/* Left Big Card */}
                <div className="bg-white/70 backdrop-blur-lg p-10 rounded-2xl shadow-xl border border-gray-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Why We Built WarmPaws
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Winter can be tough for pets. WarmPaws brings all essential
                        winter-care tools into one platform — guides, services,
                        personalized dashboards, and smart recommendations.
                        Designed with love, built with modern technology.
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                        <FaSnowflake className="text-blue-500 text-4xl" />
                        <p className="text-gray-700 font-medium">
                            Winter-ready pet support at your fingertips.
                        </p>
                    </div>
                </div>

                {/* Image / Art Section */}
                <div className="flex items-center justify-center">
                    <img
                        src="https://i.ibb.co.com/0psSBmRW/petcare.png"
                        alt="WarmPaws Art"
                        className="w-72 drop-shadow-xl animate-pulse"
                    />
                </div>
            </div>

            {/* Feature Cards Section */}
            <div className="max-w-7xl mx-auto mt-20">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                    What Makes WarmPaws Special?
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="bg-white rounded-xl p-7 shadow-lg hover:shadow-xl transition-all border border-gray-200">
                        <FaPaw className="text-blue-500 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            Winter Care Tips
                        </h3>
                        <p className="text-gray-600">
                            Expert-crafted guides to help keep your pets safe and warm.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl p-7 shadow-lg hover:shadow-xl transition-all border border-gray-200">
                        <FaShieldAlt className="text-blue-500 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            Secure Experience
                        </h3>
                        <p className="text-gray-600">
                            Firebase auth, protected routes, and a safe dashboard experience.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl p-7 shadow-lg hover:shadow-xl transition-all border border-gray-200">
                        <FaUsers className="text-blue-500 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            Profile Dashboard
                        </h3>
                        <p className="text-gray-600">
                            Manage your account, bookings, favorites, and more with ease.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-xl p-7 shadow-lg hover:shadow-xl transition-all border border-gray-200">
                        <FaRocket className="text-blue-500 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            Smooth UI & Animations
                        </h3>
                        <p className="text-gray-600">
                            Powered by AOS, Swiper, and Tailwind for a premium feel.
                        </p>
                    </div>

                </div>
            </div>

            {/* Tech Section */}
            <div className="mt-20 bg-white p-10 rounded-2xl shadow-xl border max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">Technologies Used</h2>
                <p className="text-center text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    WarmPaws is built using modern technologies — React, Firebase,
                    Tailwind CSS, AOS animations, Swiper sliders, and secure
                    authentication patterns. Designed to deliver performance,
                    accessibility, and a smooth user experience.
                </p>
            </div>
        </div>
    );
};

export default About;
