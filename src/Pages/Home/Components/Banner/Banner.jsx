import img1 from '../../../../assets/images/banner/1.jpg'
import img2 from '../../../../assets/images/banner/2.jpg'
import img3 from '../../../../assets/images/banner/3.jpg'
import img4 from '../../../../assets/images/banner/4.jpg'




const Banner = () => {
    return (
        <div className="carousel w-full h-[300px] md:h-[500px] lg:h-[500px] object-cover rounded-2xl ">




        <div id="slide1" className="carousel-item relative w-full">

        <div className="hero-overlay opacity-80  absolute bg-gradient-to-r from-[#151515] to-[rgba(21 , 21 , 21 , 0)]  "></div>

          <img
            src={img1}
            className="w-full" />

           <div className=" absolute  right-5 flex -translate-y-1/2 transform bottom-0 justify-end gap-10">
            <a href="#slide4" className="btn w-2 h-2  rounded-btn">❮</a>
            <a href="#slide2" className="btn w-2 h-2  rounded-btn">❯</a>
          </div>

          <div className="absolute sm:text-center left-5 right-5 bottom-24 flex  transform   ">
            
            <div className='text-white space-y-4 w-full md:w-1/3 pl-12  '>

                <h2 className='font-bold md:text-4xl  text-2xl lg:text-6xl'> Affordable Price For Car Servicing</h2>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                < div className=''>                <button className='btn w-24 btn-primary btn-sm mr-6 '>Discover More</button>
                <button className='btn w-24 btn-outline btn-sm btn-secondary'>Latest Project</button>
                </div>

            </div>
          </div>
          
        </div>
        
        <div id="slide2" className="carousel-item relative w-full">
        <div className="hero-overlay opacity-80 absolute bg-gradient-to-r from-[#151515] to-[rgba(21 , 21 , 21 , 0)]  "></div>
          <img
            src={img2}
            className="w-full" />
           <div className="absolute left-5 right-5 flex -translate-y-1/2 transform bottom-0 justify-end gap-10">
            <a href="#slide1" className="btn btn-circle h-7 w-7 ">❮</a>
            <a href="#slide3" className="btn btn-circle ">❯</a>
          </div>
          <div className="absolute left-5 right-5 flex -translate-y-1/2 transform bottom-0  ">
            
            <div className='text-white space-y-4 w-1/3 pl-12 '>
                <h2 className='font-bold text-6xl'> Affordable Price For Car Servicing</h2>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <button className='btn btn-primary mr-6'>Discover More</button>
                <button className='btn btn-outline btn-secondary'>Latest Project</button>
            </div>
          </div>
        </div>
        
        <div id="slide3" className="carousel-item relative w-full">
        <div className="hero-overlay opacity-80 absolute bg-gradient-to-r from-[#151515] to-[rgba(21 , 21 , 21 , 0)]  "></div>
          <img
            src={img3}
            className="w-full" />
           <div className="absolute left-5 right-5 flex -translate-y-1/2 transform bottom-0 justify-end gap-10">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
          <div className="absolute left-5 right-5 flex -translate-y-1/2 transform bottom-0  ">
            
            <div className='text-white space-y-4 w-1/3 pl-12 '>
                <h2 className='font-bold text-6xl'> Affordable Price For Car Servicing</h2>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <button className='btn btn-primary mr-6'>Discover More</button>
                <button className='btn btn-outline btn-secondary'>Latest Project</button>
            </div>
          </div>
        </div>
       
        <div id="slide4" className="carousel-item relative w-full">
        <div className="hero-overlay opacity-80 absolute bg-gradient-to-r from-[#151515] to-[rgba(21 , 21 , 21 , 0)]  "></div>
          <img
            src={img4}
            className="w-full" />
           <div className="absolute left-5 right-5 flex -translate-y-1/2 transform bottom-0 justify-end gap-10">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
          <div className="absolute left-5 right-5 flex -translate-y-1/2 transform bottom-0  ">
            
            <div className='text-white space-y-4 w-1/3 pl-12 '>
                <h2 className='font-bold text-6xl'> Affordable Price For Car Servicing</h2>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <button className='btn btn-primary mr-6'>Discover More</button>
                <button className='btn btn-outline btn-secondary'>Latest Project</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;