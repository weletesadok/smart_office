import React from "react";
import { Link } from "react-router-dom";

const UsersTable = () => {
  const onDelete = () => {
    alert("delted");
  };
  const users = [
    {
      id: 1,
      name: "Jane Cooper",
      email: "jane.cooper@example.com",
      avatar: "https://i.pravatar.cc/150?img=1",
      status: "Active",
      role: "Admin",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@example.com",
      avatar: "https://i.pravatar.cc/150?img=2",
      status: "Inactive",
      role: "User",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      avatar: "https://i.pravatar.cc/150?img=3",
      status: "Active",
      role: "User",
    },
    {
      id: 4,
      name: "Michael Smith",
      email: "michael.smith@example.com",
      avatar: "https://i.pravatar.cc/150?img=4",
      status: "Active",
      role: "Admin",
    },
    {
      id: 5,
      name: "Emily Brown",
      email: "emily.brown@example.com",
      avatar: "https://i.pravatar.cc/150?img=5",
      status: "Inactive",
      role: "User",
    },
    {
      id: 6,
      name: "Daniel Williams",
      email: "daniel.williams@example.com",
      avatar: "https://i.pravatar.cc/150?img=6",
      status: "Active",
      role: "User",
    },
    {
      id: 7,
      name: "Olivia Jones",
      email: "olivia.jones@example.com",
      avatar: "https://i.pravatar.cc/150?img=7",
      status: "Inactive",
      role: "Admin",
    },
    {
      id: 8,
      name: "William Taylor",
      email: "william.taylor@example.com",
      avatar: "https://i.pravatar.cc/150?img=8",
      status: "Active",
      role: "User",
    },
    {
      id: 9,
      name: "Sophia Wilson",
      email: "sophia.wilson@example.com",
      avatar: "https://i.pravatar.cc/150?img=9",
      status: "Active",
      role: "User",
    },
    {
      id: 10,
      name: "Alexander Martinez",
      email: "alexander.martinez@example.com",
      avatar: "https://i.pravatar.cc/150?img=10",
      status: "Active",
      role: "Admin",
    },
  ];

  return (
    <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Status
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Role
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Email
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {users.map((user) => (
          <tr key={user.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.avatar}
                    alt={user.name}
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    {user.name}
                  </div>
                  <div className="text-sm text-gray-500">{user.email}</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  user.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {user.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {user.role}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {user.email}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <Link
                to={`/edit/${user.id}`}
                className="text-indigo-600 hover:text-indigo-900"
              >
                Edit
              </Link>
              <button
                onClick={() => onDelete(user.id)}
                className="ml-2 text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
