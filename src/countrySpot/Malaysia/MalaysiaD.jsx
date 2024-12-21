import { Link, useLoaderData, useParams } from "react-router-dom";
const MalaysiaD = () => {
  const carts = useLoaderData();
  const { id } = useParams();
  // console.log(data, "id is comming", id)
  const idInt = parseInt(id);
  const cart = carts.find((cart) => cart.id === idInt);
  console.log(cart, cart.image);
  const {
    image,
    country,
    location,
    short_description,
    tourist_spot_name,
    travel_time,
    total_visitors_per_year,
    seasonality,
    short_title,
    average_cost,
  } = cart;

  return (
    <div className="hero">
      <div className="flex-col ">
        <img
          title={tourist_spot_name}
          src={image}
          className="w-full rounded-lg shadow-2xl"
        />
        <div className="text-left mt-5">
          <h1 className="text-4xl font-bold">{short_title}</h1>
          <h3 className="text-xl py-2">
            When Best Seasonality :{" "}
            <b>
              <i>{seasonality}</i>
            </b>
          </h3>
          <p className="py-2 text-xl">{short_description}</p>
          <h3 className="text-2xl text-center font-extrabold py-4">
            More Details
          </h3>
          <div className="grid lg:grid-cols-3">
            <div>
              <p className="text-lg">
                Location: <b className="italic">{location}</b>
              </p>
              <p className="text-lg">
                Country: <b className="italic">{country}</b>
              </p>
            </div>
            <div>
              <p className="text-lg">
                Tourist Spot: <b className="italic">{tourist_spot_name}</b>
              </p>
              <p className="text-lg">
                Travel Time: <b className="italic">{travel_time}</b>
              </p>
            </div>
            <div>
              <p className="text-lg">
                Average Cost: <b className="italic">{average_cost}</b>
              </p>
              <p className="text-lg">
                Visitors Per Year:{" "}
                <b className="italic">{total_visitors_per_year}</b>
              </p>
            </div>
          </div>
          <br />
          <button className="btn btn-info">
            {" "}
            <Link to={"/malaysia"}> Go Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MalaysiaD;
