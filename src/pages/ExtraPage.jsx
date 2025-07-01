import { useState } from "react";

const initialData = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@gmail.com",
    mobile: "9876543210",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@gmail.com",
    mobile: "9123456780",
  },
  {
    id: 3,
    name: "Sam doe",
    email: "sam@gmail.com",
    mobile: "9988776655",
  },
];

export default function ExtraPage() {
  const [data, setData] = useState(initialData);
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const [editId, setEditId] = useState(null);

  const add = () => {
    if (form.name && form.email && form.mobile) {
      setData([...data, { id: Date.now(), ...form }]);
      setForm({ name: "", email: "", mobile: "" });
    }
  };

  const del = (id) => setData(data.filter((d) => d.id !== id));

  const startEdit = (row) => {
    setEditId(row.id);
    setForm({ name: row.name, email: row.email, mobile: row.mobile });
  };

  const update = () => {
    setData(data.map((d) => (d.id === editId ? { ...d, ...form } : d)));
    setEditId(null);
    setForm({ name: "", email: "", mobile: "" });
  };

  const cancelEdit = () => {
    setEditId(null);
    setForm({ name: "", email: "", mobile: "" });
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">User Table</h1>
      <table className="min-w-full border border-gray-300 mb-6 text-base">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">Full Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Mobile</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="text-center">
              <td className="px-4 py-2 border">{row.name}</td>
              <td className="px-4 py-2 border">{row.email}</td>
              <td className="px-4 py-2 border">{row.mobile}</td>
              <td className="px-4 py-2 border space-x-2">
                <button
                  onClick={() => startEdit(row)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => del(row.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center gap-2 mt-4">
        <input
          className="border p-2 rounded"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        />
        <input
          className="border p-2 rounded"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        />
        <input
          className="border p-2 rounded"
          placeholder="Mobile"
          value={form.mobile}
          onChange={(e) => setForm((f) => ({ ...f, mobile: e.target.value }))}
        />
        {editId ? (
          <>
            <button
              className="bg-blue-600 text-white p-2 rounded"
              onClick={update}
            >
              Update
            </button>
            <button
              className="bg-gray-400 text-white p-2 rounded"
              onClick={cancelEdit}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className="bg-green-600 text-white p-2 rounded flex items-center"
            onClick={add}
            title="Add"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
