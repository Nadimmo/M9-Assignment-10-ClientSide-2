import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const data = useLoaderData();
  // console.log(data);

  const { photo,country,location,description, spot, time, visitorsPerYear,seasonality, title,  average} = data
//   console.log(data)


  return (
    <div className="hero">
      <div className="flex-col ">
        <img
        title={spot}
          src={photo}
          className="w-full rounded-lg shadow-2xl"
        />
        <div className="text-left mt-5">
          <h1 className="text-4xl font-bold">{title}</h1>
          <h3 className="text-xl py-2">When Best Seasonality : <b><i>{seasonality}</i></b></h3>
          <p className="py-2 text-xl">
            {description}
          </p>
          <h3 className="text-2xl text-center font-extrabold py-4">More Details</h3>
          <div className="grid lg:grid-cols-3">
            <div>
                <p className="text-lg">Location: <b className="italic">{location}</b></p>
                <p className="text-lg">Country: <b className="italic">{country}</b></p>
            </div>
            <div>
                <p className="text-lg">Tourist Spot: <b className="italic">{spot}</b></p>
                <p className="text-lg">Travel Time: <b className="italic">{time}</b></p>
            </div>
            <div>
                <p className="text-lg">Average Cost: <b className="italic">{average}</b></p>
                <p className="text-lg">Visitors Per Year: <b className="italic">{visitorsPerYear}</b></p>
            </div>
          </div>
          <br />
          <button className="btn btn-info"> <Link to={'/'}> Go Back</Link></button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
