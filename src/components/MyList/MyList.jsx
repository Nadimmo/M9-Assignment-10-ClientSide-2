/* eslint-disable no-unused-vars */
import{ useState} from "react";
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
    <div>
      <h1 className="text-4xl font-extrabold mt-4 text-center">My List</h1>
      <br />
      <br />
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-xl">Country</th>
                <th className="text-xl">Location</th>
                <th className="text-xl">Email</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.country}</td>
                  <td>{user.location}</td>
                  <td>{user.email}</td>
                  <td className="btn btn-info">
                    <Link to={`/update/${user._id}`}>Update</Link>
                  </td>
                  <td className="btn btn-error lg:ml-2">
                    <button onClick={() => handleRemove(user._id)}>Delete</button>
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
