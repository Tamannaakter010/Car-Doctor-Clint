import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
      
        <section className="p-6 md:p-12 lg:p-16 bg-gray-50">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            

            <div className="flex flex-col gap-4 w-full lg:w-1/2">
              <div className="relative flex justify-center">
               
                <img
                  src={person}
                  alt="A person in the movie scene"
                  className="w-full h-auto rounded-lg shadow-2xl" 
                />
           
                <img
                  src={parts}
                  alt="Parts of a movie setup"
                  className={`w-1/2 md:w-1/2  rounded-lg shadow-2xl border-white lg:border-8 md:border-8 absolute`}
                  style={{
                    bottom: '-15%', 
                    left: '85%',    
                    transform: 'translate(-50%, 0)', 
                  }}
                />
              </div>
            </div>
    
            
            <div className="w-full lg:w-1/2 text-center lg:text-left p-4">
              <p className="text-red-600 font-semibold text-lg mb-2">About Us</p>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                We Are Qualified <br />
                &amp; Experienced in This Field
              </h1>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At Car Doctor, we are dedicated to providing top-notch car servicing and maintenance solutions at an affordable price. With years of experience in the automotive industry, our team of skilled professionals ensures your vehicle receives the care it deserves.
              </p>
              <button className="btn btn-active btn-secondary"> Get More info..</button>
            
             
            </div>
          </div>
        </section>
    
    

    );
};

export default About;