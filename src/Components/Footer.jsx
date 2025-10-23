import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white w-full">
                <div className="w-11/12 mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span>7/A Dhanmondi, Dhaka, Dhaka 1207</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span>+880 1234567890</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <span>petcare.info@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.facebook.com/"
                                    className="bg-blue-600 hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                                    aria-label="Facebook"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a
                                    href="https://instagram.com/"
                                    className="bg-pink-600 hover:bg-pink-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.246.06 5.877.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.167 3.631 2.186 5.65 5.817 5.817C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.06c3.631-.167 5.65-2.186 5.817-5.817C19.988 13.056 20 12.716 20 10s-.012-3.056-.06-4.123C19.773 2.246 17.754.227 14.123.06 13.056.012 12.716 0 10 0zm0 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 4.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a
                                    href="https://x.com/"
                                    className="bg-blue-400 hover:bg-blue-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                                    aria-label="Twitter"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.youtube.com/"
                                    className="bg-red-600 hover:bg-red-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                                    aria-label="YouTube"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 0C4.478 0 0 4.478 0 10s4.478 10 10 10 10-4.478 10-10S15.522 0 10 0zm3.7 14.077c-1.75.12-5.652.12-7.402 0-1.896-.13-2.117-1.059-2.131-4.077.014-3.024.237-3.947 2.131-4.077 1.75-.12 5.652-.12 7.403 0 1.897.13 2.117 1.059 2.132 4.077-.015 3.024-.237 3.947-2.132 4.077zM8.334 8.048l4.098 1.949-4.098 1.955V8.048z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a
                                    href="https://github.com/"
                                    className="bg-gray-700 hover:bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                                    aria-label="GitHub"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                            <p className="mt-4 text-gray-300">Stay connected with us on social media for updates and news.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/profile" className="text-gray-300 hover:text-white transition-colors">My Profile</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
                                </li>
                                <li>
                                    <a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} WarmPaws. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;