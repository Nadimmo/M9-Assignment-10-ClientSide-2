import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import '../Home/style.css'
const Update = () => {
    const carts = useLoaderData()
    console.log(carts.photo, carts._id)
    const  {name, email, photo,country,location,description, spot, time, visitorsPerYear,seasonality, title,  average} = carts


    const handlerSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const spot = form.spot.value;
        const name = form.user.value;
        const email = form.email.value;
        const time = form.time.value;
        const photo = form.photo.value;
        const visitorsPerYear = form.visitorsPerYear.value;
        const seasonality = form.seasonality.value;
        const title = form.title.value;
        const average = form.average.value;

        const newCart = {name, email, photo,country,location,description, spot, time, visitorsPerYear,seasonality, title,  average}
        console.log(newCart)
    
    
        // send data backend
        fetch(`https://assignment-server-10-phi.vercel.app/cartes/${carts._id}`, {
          method: "PUT",
          headers: {
            'content-type':"application/json"
          },
          body: JSON.stringify(newCart)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.modifiedCount > 0){
            Swal.fire("Update Cart Successfully");
            form.reset()
          }
          
        })
    
    
      }
    return (
        <div className="content hero">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center text-white">Update Tourist Spot</h1>
          </div>
          <div className="card shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handlerSubmit} className="card-body">
                <div className="lg:flex justify-between">
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text"> Country Name</span>
                        </label>
                        <input
                        name="country"
                        type="text"
                        placeholder="country"
                        className="input input-bordered lg:w-[400px]"
                        required
                        defaultValue={country}
                        />
                    </div>
                    <div className="form-control lg:ml-10 ">
                        <label className="label">
                        <span className="label-text">Location</span>
                        </label>
                        <input
                        name="location"
                        type="text"
                        placeholder="location"
                        className="input input-bordered lg:w-[260px]"
                        required
                        defaultValue={location}
                        />
                    </div>
                </div>
                <div className="lg:flex justify-between">
                    <div className="form-control ">
                        <label className="label">
                        <span className="label-text">Description</span>
                        </label>
                        <input
                        name="description"
                        type="text"
                        placeholder="description"
                        className="input input-bordered lg:w-[400px]"
                        required
                        defaultValue={description}
                        />
                    </div>
                    <div className="form-control lg:ml-10">
                        <label className="label">
                        <span className="label-text"> Tourist Spot Name</span>
                        </label>
                        <input
                        name="spot"
                        type="text"
                        placeholder="spot"
                        className="input input-bordered lg:w-[260px]"
                        required
                        defaultValue={spot}
                        />
                    </div>
                </div>
                <div className="lg:flex justify-between">
                    <div className="form-control ">
                        <label className="label">
                        <span className="label-text">Title</span>
                        </label>
                        <input
                        name="title"
                        type="text"
                        placeholder="title"
                        className="input input-bordered lg:w-[400px]"
                        required
                        defaultValue={title}
                        />
                    </div>
                    <div className="form-control lg:ml-10">
                        <label className="label">
                        <span className="label-text">Average Cost</span>
                        </label>
                        <input
                        name="average"
                        type="number"
                        placeholder="average cost"
                        className="input input-bordered lg:w-[260px]"
                        required
                        defaultValue={average}
                        />
                    </div>
                </div>
                <div className="lg:flex justify-between">
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">User Email</span>
                        </label>
                        <input
                        name="email"
                        type="email"
                        placeholder="email"
                        className="input input-bordered lg:w-[400px]"
                        required
                        defaultValue={email}
                        />
                    </div>
                    <div className="form-control lg:ml-10">
                        <label className="label">
                        <span className="label-text">User Name</span>
                        </label>
                        <input
                        name="user"
                        type="text"
                        placeholder="user name"
                        className="input input-bordered lg:w-[260px]"
                        required
                        defaultValue={name}
                        />
                    </div>
                </div>
                <div className="lg:flex justify-between">
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Seasonality</span>
                        </label>
                        <input
                        name="seasonality"
                        type="text"
                        placeholder="seasonality"
                        className="input input-bordered lg:w-[400px]"
                        required
                        defaultValue={seasonality}
                        />
                    </div>
                    <div className="form-control lg:ml-10">
                        <label className="label ">
                        <span className="label-text">Photo</span>
                        </label>
                        <input
                        name="photo"
                        type="url"
                        placeholder="image"
                        className="input input-bordered lg:w-[260px]"
                        required
                        defaultValue={photo}
                        />
                    </div>
                </div>
                <div className="lg:flex justify-between">
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Travel Time</span>
                        </label>
                        <input
                        name="time"
                        type="text"
                        placeholder="travel time"
                        className="input input-bordered lg:w-[400px]"
                        required
                        defaultValue={time}
                        />
                    </div>
                    <div className="form-control lg:ml-10">
                        <label className="label ">
                        <span className="label-text">Visitors PerYear</span>
                        </label>
                        <input
                        name="visitorsPerYear"
                        type="number"
                        placeholder="visitorsPerYear"
                        className="input input-bordered lg:w-[260px]"
                        required
                        defaultValue={visitorsPerYear}
                        />
                    </div>
                </div>
              
              <div className="form-control mt-6">
                <button className="btn btn-info">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
};

export default Update;