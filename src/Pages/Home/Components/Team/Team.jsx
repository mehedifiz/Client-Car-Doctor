import per1 from '../../../../assets/team/1.jpg';
import per2 from '../../../../assets/team/2.jpg';
import per3 from '../../../../assets/team/3.jpg';
const Team = () => {
    return (
        <div className='mx-auto my-16'>

            <div className="text-center space-y-3 mb-8">
                <h3 className="text-2xl font-bold text-orange-500">team</h3>
                    <h2 className="text-4xl ">Meet Our Team</h2>
                <p className="text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className='flex flex-col mx-auto md:flex-row justify-center-center  gap-10'>
            <div className="card bg-base-100 md:w-full shadow-sm">
  <figure>
    <img
      src={per1}
      alt="Refat Rafee" />
  </figure>
  <div className="card-body items-center">
    <h2 className="card-title">
      Refat Rafee
    </h2>
    <p className='text-gray-500'>Engine Expert</p>
    <div className="card-actions justify-center">
      <div className="badge badge-outline">Engine Maintenance</div>
      <div className="badge badge-outline">Performance Tuning</div>
      <div className="badge badge-outline">Diagnostics</div>
      <div className="badge badge-outline">Repair Tips</div>
    </div>
  </div>
</div>

<div className="card bg-base-100 md:w-full shadow-sm">
  <figure>
    <img
      src={per2}
       />
  </figure>
  <div className="card-body items-center">
    <h2 className="card-title">
     Abdul Basit
    </h2>
    <p className='text-gray-500'>Transmission Specialist</p>
    <div className="card-actions justify-center">
      <div className="badge badge-outline">Transmission Repair</div>
      <div className="badge badge-outline">Fluid Change</div>
      <div className="badge badge-outline">Clutch Replacement</div>
      <div className="badge badge-outline">Troubleshooting</div>
    </div>
  </div>
</div>

<div className="card bg-base-100 md:w-full shadow-sm">
  <figure>
    <img
      src={per3}
      alt="Basit" />
  </figure>
  <div className="card-body items-center">
    <h2 className="card-title">
      John Hank
    </h2>
    <p className='text-gray-500'>Suspension Specialist</p>
    <div className="card-actions justify-center">
      <div className="badge badge-outline">Suspension Repair</div>
      <div className="badge badge-outline">Alignment</div>
      <div className="badge badge-outline">Shock Absorbers</div>
      <div className="badge badge-outline">Spring Replacement</div>
    </div>
  </div>
</div>




            </div>
            
        </div>
    );
};

export default Team;


