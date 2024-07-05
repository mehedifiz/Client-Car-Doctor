import bg from '../../../../assets/images/checkout/checkout.png';

const Banner2 = ({ banner }) => {
    const { title ,booking} = banner;

    return (
        <div className="relative h-64 w-full">
            {/* Background Image Div */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bg})` }}
            ></div>
            {/* Title Div */}
            <div className="relative  z-10 h-full">
                <div className='absolute left-5 bottom-2   flex items-center flex-col justify-center '>

                <h2 className=" shadow-lg text-3xl font-bold text-white">{title}</h2>
                <h2 className='text-2xl font-bold text-white'>Your Bookings :{booking.length}</h2>
                </div>
            </div>
        </div>
    );
};

export default Banner2;
