import parson from '../../../../assets/images/about_us/person.jpg'
import parts from '../../../../assets/images/about_us/parts.jpg'



const About = () => {
    return (
        <div className="hero bg-base-100 min-h-[100vh]">
  <div className="hero-content  flex flex-col lg:flex-row">
    <div className='lg:w-2/3 relative mb-20'>
    <img
      src={parson}
      className=" w-[80%] h-full rounded-lg shadow-2xl " />
       <img
      src={parts}
      className="w-1/2 absolute right-5 top-1/2 borde-8 border-white rounded-lg shadow-2xl" />
    </div>
    <div className='lg:pr-52 sm:px-5'>
      <h2 className='text-orange-500 font-bold text-xl'>About Us</h2>
      <h1 className="text-5xl  font-bold">We are qualified & of experience in this field</h1>
      <p className="py-3 space-y-5">
        PThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      </p>
      <p className=''>
      the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      </p>
      <button className="btn mt-5 btn-info bg-orange-600 text-white outline-none ">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;