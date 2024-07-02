import { IoIosArrowRoundForward } from "react-icons/io";

const Service = ({service}) => {
  const {title , img , price} = service;
    return (
        <div className="card bg-base-100 w-96 sm:w-full shadow-md">
  <figure className="px-10 pt-10">
    <img
      src={img}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{title}</h2>
    <div className="card-actions items-center">
    <p className="text-xl text-orange-600 font-bold"> Price :${price}</p>
    <IoIosArrowRoundForward className="text-4xl" />
    </div>
  </div>
</div>
    );
};

export default Service;