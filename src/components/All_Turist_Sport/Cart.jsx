/* eslint-disable react/prop-types */
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div className="mt-10">
        <div>
          <div className="card card-compact lg:h-[600px] lg:w-[360px] bg-base-100 shadow-xl p-6">
            <figure>
              <img
                src={cart.photo}
                alt="loading.."
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-sm"><FaLocationDot /> {cart.spot},<p className="text-sm">{cart.country}</p> </h2>
              <h2 className="text-2xl font-bold">{cart.title}</h2>
              <p className="text-[16px] opacity-[0.6]">{cart.description}</p>
              <div className="lg:flex justify-between">
                <p className="text-[16px]">Travel Time: {cart.time}</p>
                <p className="text-[16px]">Average Cost: ${cart.average}</p>
              </div>
              <div className="card-actions mt-4">
                <button className="btn btn-info"> <Link to={`/view/${cart._id}`}>View Details</Link> </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cart;