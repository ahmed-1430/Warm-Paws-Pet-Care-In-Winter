import { FaPlus, FaStar, FaUser } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Link, NavLink, Outlet } from "react-router";

const AdminLayout = () => {
    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* SIDEBAR */}
            <aside className="w-72 bg-white backdrop-blur-xl shadow-xl p-6">
                <Link to={"/admin/dashboard"} className="text-2xl font-bold mb-8">Admin Panel</Link>

                <nav className="space-y-2 pt-8">
                    <NavLink to="/admin/dashboard" className="admin-link">
                        <MdDashboard  size={18} /> Dashboard
                    </NavLink>
                    <NavLink to="/admin/services" className="admin-link">
                        <GoPackage  size={18} /> Manage Services
                    </NavLink>

                    <NavLink to="/admin/bookings" className="admin-link">
                        <SlCalender size={18} /> Manage Bookings
                    </NavLink>

                    <NavLink to="/admin/users" className="admin-link">
                        <FaUser size={18} /> Manage Users
                    </NavLink>

                    <NavLink to="/admin/reviews" className="admin-link">
                        <FaStar size={18} /> Manage Reviews
                    </NavLink>

                    <NavLink to="/admin/providers" className="admin-link">
                        <FaPlus size={18} /> Add Provider
                    </NavLink>

                    <NavLink to="/admin/add-service" className="admin-link">
                        <FaPlus size={18} /> Add Service
                    </NavLink>
                </nav>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
