import i1 from '../../../../assets/icons/check.svg'
import i2 from '../../../../assets/icons/clock.svg'
import i3 from '../../../../assets/icons/deliveryt.svg'
import i4 from '../../../../assets/icons/group.svg'
import i5 from '../../../../assets/icons/person.svg'
import i6 from '../../../../assets/icons/Wrench.svg'


const WhyUs = () => {
    return (
        <div className='mx-auto my-16 '>

            <div className="text-center space-y-3 mb-8">
                <h3 className="text-2xl font-bold text-orange-500">Core Features</h3>
                    <h2 className="text-4xl ">Why Choose Us</h2>
                <p className="text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className='flex justify-center lg:ml-44 items-center '>
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-16'>
        <div className='card gap-2 font-bold border border-gray-600 w-36 justify-center items-center p-2'>
            <img src={i1} className='w-24' />
            <h3>100% Guranty</h3>
        </div>
        <div className='card gap-2 font-bold border border-gray-600 w-36 justify-center items-center p-2'>
            <img src={i2} className='w-24 bg-orange-600 rounded-xl' />
            <h3>Timely Delivery</h3>
        </div>
        <div className='card gap-2 font-bold border border-gray-600 w-36 justify-center items-center p-2'>
            <img src={i3} className='w-24' />
            <h3>Troubleshooting</h3>
        </div>
        <div className='card gap-2 font-bold border border-gray-600 w-36 justify-center items-center p-2'>
            <img src={i5} className='w-20' />
            <h3>24/7 Support</h3>
        </div>
        <div className='card gap-2 font-bold border border-gray-600 w-36 justify-center items-center p-2'>
            <img src={i6} className='w-24' />
            <h3>Best Equipmentt</h3>
        </div>
        <div className='card gap-2 font-bold border border-gray-600 w-36 justify-center items-center p-2'>
            <img src={i4} className='w-24' />
            <h3>Expert Team</h3>
        </div>
       
    </div>
</div>









            </div>
    );
};

export default WhyUs;