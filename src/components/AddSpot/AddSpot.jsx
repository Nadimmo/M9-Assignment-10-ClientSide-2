import Swal from 'sweetalert2';
import '../Home/style.css'
const AddSpot = () => {


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

        const cart = {name, email, photo,country,location,description, spot, time, visitorsPerYear,seasonality, title,  average}
        console.log(cart)
    
    
        // send data backend
        fetch('https://assignment-server-10-phi.vercel.app/cartes', {
          method: "POST",
          headers: {
            'content-type':"application/json"
          },
          body: JSON.stringify(cart)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          Swal.fire("Create Cart Successfully");
          form.reset()
        })
    
    
      }
    return (
        <div className="content hero">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center text-white">Add  Tourist Spot</h1>
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
                        />
                    </div>
                </div>
              
              <div className="form-control mt-6">
                <button className="btn btn-info">Add Cart</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
};

export default AddSpot;