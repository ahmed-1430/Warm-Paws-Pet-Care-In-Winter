import { useEffect, useState } from "react";

const API = "http://localhost:3000/api";

const AdminServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${API}/services`)
      .then(res => res.json())
      .then(setServices);
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete service?")) return;

    await fetch(`${API}/services/${id}`, { method: "DELETE" });
    setServices(prev => prev.filter(s => s._id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Services</h2>

      <div className="border rounded-xl overflow-hidden bg-white shadow">
        <table className="w-full">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {services.map(s => (
              <tr key={s._id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <img src={s.image} className="w-16 rounded-lg" />
                </td>
                <td className="p-3 font-medium">{s.serviceName}</td>
                <td className="p-3">${s.price}</td>
                <td className="p-3 space-x-2">
                  <button className="px-3 py-1 rounded bg-blue-500 text-white cursor-pointer">Edit</button>
                  <button onClick={() => handleDelete(s._id)} className="px-3 py-1 rounded bg-red-500 text-white cursor-pointer">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default AdminServices;
