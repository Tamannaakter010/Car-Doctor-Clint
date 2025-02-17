import { useLoaderData } from "react-router-dom";


const Bookings = () => {
    const service = useLoaderData();
    const {title,_id,} =service;
    return (
        <div>
             <h2>Services:{title}</h2>
          <div className="hero bg-base-200 min-h-screen">
 
         
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-3xl text-center font-bold mt-8">Booking now!</h1>

      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        
    );
};

export default Bookings;