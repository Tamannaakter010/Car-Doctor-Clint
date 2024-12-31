
import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"


const Banner = () => {
    return (
      <div className="w-full max-w-7xl mx-auto">
      <div className="carousel w-full h-96 relative">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={img1}
            className="w-full h-full object-cover rounded-xl"
            alt="Slide 1"
          />
          <div className="absolute left-5 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 text-white">
            <h2 className="text-4xl md:text-5xl font-bold">
              Affordable price for car servicing
            </h2>
            <p className="text-lg">Best Car Service Center In Dhaka, Bangladesh</p>
            <div className="flex space-x-2">
              <button className="btn btn-active btn-secondary">Discover More</button>
              <button className="btn btn-active btn-secondary">Latest Projects</button>
            </div>
          </div>
          <div className="absolute right-5 bottom-5 flex">
            <a href="#slide4" className="btn btn-circle mr-2">❮</a>
            <a href="#slide2" className="btn btn-circle mr-2">❯</a>
          </div>
        </div>
    
        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={img2}
            className="w-full h-full object-cover rounded-xl"
            alt="Slide 2"
          />
          <div className="absolute left-5 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 text-white">
            <h2 className="text-4xl md:text-5xl font-bold">
              Affordable price for car servicing
            </h2>
            <p className="text-lg">Best Car Service Center In Dhaka, Bangladesh</p>
            <div className="flex space-x-2">
              <button className="btn btn-active btn-secondary">Discover More</button>
              <button className="btn btn-active btn-secondary">Latest Projects</button>
            </div>
          </div>
          <div className="absolute right-5 bottom-5 flex">
            <a href="#slide1" className="btn btn-circle mr-2">❮</a>
            <a href="#slide3" className="btn btn-circle mr-2">❯</a>
          </div>
        </div>
    
        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={img3}
            className="w-full h-full object-cover rounded-xl"
            alt="Slide 3"
          />
          <div className="absolute left-5 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 text-white">
            <h2 className="text-4xl md:text-5xl font-bold">
              Affordable price for car servicing
            </h2>
            <p className="text-lg">Best Car Service Center In Dhaka, Bangladesh</p>
            <div className="flex space-x-2">
              <button className="btn btn-active btn-secondary">Discover More</button>
              <button className="btn btn-active btn-secondary">Latest Projects</button>
            </div>
          </div>
          <div className="absolute right-5 bottom-5 flex">
            <a href="#slide2" className="btn btn-circle mr-2">❮</a>
            <a href="#slide4" className="btn btn-circle mr-2">❯</a>
          </div>
        </div>
    
        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={img4}
            className="w-full h-full object-cover rounded-xl"
            alt="Slide 4"
          />
          <div className="absolute left-5 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 text-white">
            <h2 className="text-4xl md:text-5xl font-bold">
              Affordable price for car servicing
            </h2>
            <p className="text-lg">Best Car Service Center In Dhaka, Bangladesh</p>
            <div className="flex space-x-2">
              <button className="btn btn-active btn-secondary">Discover More</button>
              <button className="btn btn-active btn-secondary">Latest Projects</button>
            </div>
          </div>
          <div className="absolute right-5 bottom-5 flex">
            <a href="#slide3" className="btn btn-circle mr-2">❮</a>
            <a href="#slide1" className="btn btn-circle mr-2">❯</a>
          </div>
        </div>
      </div>
    </div>
    
    );
};

export default Banner;