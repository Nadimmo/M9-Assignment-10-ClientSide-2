import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const Bangladesh = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center mt-5">
        Bangladesh Tourist Spot
      </h1>
      <br />
      <br />
      <div className="grid lg:grid-cols-3 gap-5">
        {data.map((cart) => (
          <div key={cart.id} className="mt-10">
            <div>
              <div className="card card-compact lg:w-[360px] bg-base-100 shadow-xl p-6">
                <figure>
                  <img src={cart.image} alt="loading.." />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-sm">
                    <FaLocationDot /> {cart.tourists_spot_name},
                    <p className="text-sm">{cart.country_Name}</p>
                  </h2>
                  <h2 className="text-2xl font-bold">{cart.short_title}</h2>
                  <p className="text-[16px] opacity-[0.6]">
                    {cart.short_description}
                  </p>
                  <div className="lg:flex justify-between">
                    <p className="text-[16px]">Travel Time: {cart.travel_time}</p>
                    <p className="text-[16px]">Average Cost: ${cart.average_cost}</p>
                  </div>
                  <div className="card-actions mt-4">
                    <button className="btn btn-info">
                    
                      <Link to={`/details/${cart.id}`}>View Details</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bangladesh;
