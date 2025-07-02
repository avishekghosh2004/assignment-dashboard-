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
                  className="text-blue-600 hover:text-blue-700 cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => del(row.id)}
                  className="text-red-500 hover:text-red-600 cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="w-full mb-4">
        <form
          className="grid grid-cols-4 gap-4 items-center max-w-full"
          onSubmit={(e) => {
            e.preventDefault();
            editId ? update() : add();
          }}
        >
          <input
            className="border p-2 rounded w-full"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
          <input
            className="border p-2 rounded w-full"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
          <input
            className="border p-2 rounded w-full"
            placeholder="Mobile"
            value={form.mobile}
            onChange={(e) => setForm((f) => ({ ...f, mobile: e.target.value }))}
          />
          <div className="flex gap-2">
            {editId ? (
              <>
                <button
                  type="button"
                  className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 cursor-pointer w-full"
                  onClick={update}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 cursor-pointer w-full"
                  onClick={cancelEdit}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="submit"
                className="bg-green-600 text-white p-2 rounded flex items-center justify-center hover:bg-green-700 cursor-pointer w-10 h-10"
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
        </form>
      </div>
    </div>
  );
}
