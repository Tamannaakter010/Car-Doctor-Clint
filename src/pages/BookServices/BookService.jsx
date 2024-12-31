import { Link } from "react-router-dom";

const BookService = ({ service }) => {
  const { _id, title, img, price } = service;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt={title} 
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title justify-center">{title}</h2>
          <p>Price: ${price}</p>
          <div className="card-actions">
            <Link to={`/book/${_id}`}>
              <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookService;
