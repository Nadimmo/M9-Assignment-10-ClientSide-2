// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import { Link, useLoaderData } from "react-router-dom";

import logo from "../../assets/image/cox-bazar.png";
import logo2 from "../../assets/image/bandarban2.jpg";
import logo3 from "../../assets/image/ragamati2.jpg";
import logo4 from "../../assets/image/sentmartin.jpg";
import logo5 from "../../assets/image/tiger.jpg";
import world from '../../assets/image/world.webp'

import "./style.css";
import Cart from "./Cart";

const Home = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <div className="content">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={logo} className="absolute w-[100%] lg:h-[540px]" />
            <h1 className="text-2xl lg:text-6xl text-white font-bold relative  left-[30%] top-[100px] lg:top-[220px] lg:left-[35%]">
              Coox’s Bazar
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo2} className="absolute w-[100%] lg:h-[540px]" />
            <h1 className=" text-2xl  lg:text-6xl text-white font-bold relative  left-[30%] top-[100px] lg:top-[220px] lg:left-[35%]">
              Bandarban
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo3} className="absolute w-[100%] lg:h-[540px]" />
            <h1 className="text-2xl lg:text-6xl text-white font-bold relative left-[30%] top-[100px] lg:top-[220px] lg:left-[35%]">
              Rangamati
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo4} className="absolute w-[100%] lg:h-[540px]" />
            <h1 className="text-2xl lg:text-6xl text-sky-500 font-bold  relative left-[20%] top-[100px] lg:top-[220px] lg:left-[30%]">
              Saint Martin’s Island
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo5} className="relative w-[100%] lg:h-[540px]" />
            <h1 className=" text-2xl lg:text-6xl text-white font-bold absolute left-[30%] top-[100px] lg:top-[230px] lg:left-[35%] ">
              Sundarban
            </h1>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Tourist spot section */}
      <div className="mt-10">
        <h1 className="text-6xl font-bold text-center">Tourist Spots</h1>
        <div className="mt-2 grid lg:grid-cols-3">
          {data.map((cart) => (
            <Cart key={cart._id} cart={cart}></Cart>
          ))}
        </div>
      </div>
      {/* country section */}
      <div className="mt-20 ">
        <h1 className="text-4xl font-extrabold text-center">
          SouthAsia Tourist Countries
        </h1>
        <br />
        <br />
        <div className="  ml-12 lg:ml-14 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="w-[280px] h-[280px] opacity-[0.4] hover:opacity-[0.9]">
            <img
              src="https://i.ibb.co/Pz554By/Bangladesh.jpg"
              alt=""
              className="absolute  w-[280px] h-[280px]  hover:shadow-2xl "
            />
            <h1 className="text-2xl font-bold text-center text-white relative mt-28">
              Bangladesh
            </h1>
            <p className="relative mt-16 ml-16 btn btn-info">
              <Link to="/bd"> All Tourist Spots</Link>{" "}
            </p>
          </div>
          <div className="w-[280px] h-[280px] opacity-[0.4] hover:opacity-[0.9]">
            <img
              src="https://i.ibb.co/PmzGPHs/malaysia.jpg"
              alt=""
              className="absolute w-[290px] h-[280px]  hover:shadow-2xl "
            />
            <h1 className="text-2xl font-bold text-center text-white relative pt-28">
              Malaysia
            </h1>
            <p className="relative mt-16 ml-16 btn btn-info">
              <Link to="/malaysia"> All Tourist Spots</Link>{" "}
            </p>
          </div>
          <div className="w-[280px] h-[280px] opacity-[0.4] hover:opacity-[0.9]">
            <img
              src="https://i.ibb.co/0J63nhW/indonasia.jpg"
              alt=""
              className="absolute w-[280px] h-[280px]  hover:shadow-2xl "
            />
            <h1 className="text-2xl font-bold text-center text-white relative pt-28">
              Indonesia
            </h1>
            <p className="relative mt-16 ml-16 btn btn-info">
              <Link to="/indonasia"> All Tourist Spots</Link>{" "}
            </p>
          </div>
          <div className="w-[280px] h-[280px] opacity-[0.4] hover:opacity-[0.9]">
            <img
              src="https://i.ibb.co/d49NWTG/vietnam.jpg"
              alt=""
              className="absolute w-[280px] h-[280px]  hover:shadow-2xl "
            />
            <h1 className="text-2xl font-bold text-center text-white  relative pt-28">
              Vietnam
            </h1>
            <p className="relative mt-16 ml-16 btn btn-info">
              <Link to="/vietnam"> All Tourist Spots</Link>{" "}
            </p>
          </div>
          <div className="w-[280px] h-[280px] opacity-[0.4] hover:opacity-[0.9]">
            <img
              src="https://i.ibb.co/h7mr15J/cambodia.jpg"
              alt=""
              className="absolute w-[280px] h-[280px]  hover:shadow-2xl "
            />
            <h1 className="text-2xl font-bold text-center text-white  relative pt-28">
              Cambodia
            </h1>
            <p className="relative mt-16 ml-16 btn btn-info">
              <Link to="/combodia"> All Tourist Spots</Link>{" "}
            </p>
          </div>
          <div className="w-[280px] h-[280px] opacity-[0.4] hover:opacity-[0.9]">
            <img
              src="https://i.ibb.co/4TY4HX2/thailand.jpg"
              alt=""
              className="absolute w-[280px] h-[280px]  hover:shadow-2xl "
            />
            <h1 className="text-2xl font-bold text-center text-white  relative pt-28">
              Thailand
            </h1>
            <p className="relative mt-16 ml-16 btn btn-info">
              <Link to="/thailand"> All Tourist Spots</Link>{" "}
            </p>
          </div>
        </div>
      </div>
      {/* explore world */}
      <div className="mt-10">
        <di>
          <div className="hero lg:h-[500px]  bg-black p-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={world}
                className=" lg:h-[400px] lg:w-[500px] rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-4xl font-extrabold text-white">Explore the World</h1>
                <h3 className="text-2xl font-extrabold mt-2 text-white">Discover Our Trips</h3>
                <p className="py-6 text-white">
                We travel to incredible, often overlooked places. Our global community of local experts grants you access to unique, small-group experiences.
                </p>
                <button className="btn bg-black text-white font-bold">View all trips</button>
              </div>
            </div>
          </div>
          <div className="bg-sky-400 text-center p-10">
            <h1 className="text-4xl font-bold text-white">Subscribe to our mailing list</h1>
            <h3 className="text-2xl mt-2 text-white">BE THE FIRST TO GET LATEST NEWS AND OFFERS!</h3>
          <div className="mt-5">
            <input className="h-[40px] p-5" type="email" name="" id="" placeholder="Enter Your Email" />
            <button className="btn bg-black text-white lg:ml-2">Subscribe</button>
          </div>
          </div>
        </di>
      </div>
       {/* join our community */}
       <div className="mt-10 bg-base-200 text-black p-10 lg:h-[400px]">
        <div className="text-center">
          <p className="text-sm">JOIN THE COMMUNITY</p>
          <h1 className="text-2xl font-bold mt-2 ">The Atlas is always evolving thanks to our community Here’s how to get involved:</h1>
        </div>
        <br /><br />
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:w-[340px]  bg-base-100 p-5 text-center">
            <p className="ml-[80px] lg:ml-[120px]"><MdOutlineAddLocationAlt className="text-6xl" /></p>
            <h3 className="text-xl font-bold mt-2 ">Add & Edit Places</h3>
            <p className="text-sm py-3">Tell us about all the amazing places we don’t know yet Anyone can contribute, anywhere in the world.</p>
            <p className="text-orange-500 font-bold"><a href="">Read our FAQ</a></p>
          </div>
          <div className="lg:w-[340px]  bg-base-100 p-5 text-center">
            <p className="ml-[80px] lg:ml-[120px]"><FaUserGroup className="text-6xl" /></p>
            <h3 className="text-xl font-bold mt-2 ">Become a Member</h3>
            <p className="text-sm py-3">Join our community to see far fewer ads, get a members-only newsletter, receive credit toward your next Atlas Obscura trip, and more.

</p>
            <p className="text-orange-500 font-bold"><a href="">Explore The Benefits</a></p>
          </div>
          <div className="lg:w-[340px]  bg-base-100 p-5 text-center">
            <p className="ml-[80px] lg:ml-[120px]"><FaMobileScreen className="text-6xl" /></p>
            <h3 className="text-xl font-bold mt-2 ">Download the App</h3>
            <p className="text-sm py-3">Explore our guide to over 24,000 curious and unexpected places, right from your mobile device.</p>
            <p className="text-orange-500 font-bold"><a href="">Download The App</a></p>
          </div>
        </div>
       </div>
    </div>
  );
};

export default Home;
