/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const data = useLoaderData();
  const [users, setUsers] = useState(data);

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-server-10-phi.vercel.app/cartes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              // If deletion is successful, update UI without reloading
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          })
          .catch((error) => {
            // If deletion fails
            Swal.fire("Error!", "Something went wrong while deleting the item.", "error");
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // If user cancels deletion
        Swal.fire("Cancelled", "Your item is safe :)", "info");
      }
    });
  };

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-4xl font-extrabold mt-4 text-center text-indigo-700">My List</h1>
      <div className="mt-8">
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300 rounded-lg shadow-lg">
            {/* Head */}
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="px-4 py-3 text-lg font-semibold text-left">Country</th>
                <th className="px-4 py-3 text-lg font-semibold text-left">Location</th>
                <th className="px-4 py-3 text-lg font-semibold text-left">Email</th>
                <th className="px-4 py-3 text-lg font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Rows */}
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-gray-100 transition-all`}
                >
                  <td className="px-4 py-3 text-gray-800">{user.country}</td>
                  <td className="px-4 py-3 text-gray-800">{user.location}</td>
                  <td className="px-4 py-3 text-gray-800">{user.email}</td>
                  <td className="px-4 py-3 text-center flex justify-center space-x-4">
                    <Link
                      to={`/update/${user._id}`}
                      className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleRemove(user._id)}
                      className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
};

export default MyList;
