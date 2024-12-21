import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";

const AllSpot = () => {
  const data = useLoaderData();
  console.log(data);

  return (
      <div className="mt-4">
        <h1 className="text-4xl font-extrabold text-center">All Tourist Spots</h1>
        <div className="mt-2 grid lg:grid-cols-3">
          {data.map((cart) => (
            <Cart key={cart._id} cart={cart}></Cart>
          ))}
        </div>
      </div>
  );
};

export default AllSpot;
