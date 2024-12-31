import { useLoaderData } from 'react-router-dom';


const Checkout = () => {

    const product = useLoaderData();
    const {title,_id,} =product;
    return (
        <div>
            <h2>Products:{title}</h2>
            <div>
          <div className="hero bg-base-200 min-h-screen">
 
         
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-3xl text-center font-bold mt-8">Checkout Now!</h1>

      <form className="card-body">
        <div className="form-control">
        <label className="label">
            <span className="label-text">Name</span>
          </label>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <label className="label">
            <span className="label-text">Phone</span>
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
          <button className="btn btn-primary">Confirm order</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Checkout;