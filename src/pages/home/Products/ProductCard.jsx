  
  
  import { Link } from 'react-router-dom';
  const ProductCard = ({ product }) => {
        const { _id,title, img, price } = product;

        return (
            <div>
                <div className="card bg-base-100 w-80 shadow-xl">
                    <figure className="px-6 pt-6">
                        <img 
                            src={img} 
                            alt={title} 
                            className="rounded-lg w-64 h-40 object-cover" 
                        />
                    </figure>
                    <div className="rating justify-center mt-2">
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p>Price: ${price}</p>
                        <div className="card-actions">
                           
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn btn-primary text-white">Check out</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default ProductCard;
