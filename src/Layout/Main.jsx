import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Components/Footer/Footer';
import Navber from '../Pages/Home/Components/Navber/Navber';

const Main = () => {
    return (
        <div>
<Navber></Navber>
            <Outlet></Outlet>
            
           <div className='mt-32'>
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Main;