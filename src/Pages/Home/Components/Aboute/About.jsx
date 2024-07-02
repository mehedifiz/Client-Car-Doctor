import parson from '../../../../assets/images/about_us/person.jpg'
import parts from '../../../../assets/images/about_us/parts.jpg'



const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img
      src={parson}
      className=" w-3/4 rounded-lg shadow-2xl " />
       <img
      src={parts}
      className="w-1/2 absolute right-5 top-1/2 borde-8 border-white rounded-lg shadow-2xl" />
    </div>
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default About;