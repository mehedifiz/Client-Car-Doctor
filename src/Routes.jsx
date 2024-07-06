import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Checkout from "./Pages/Checkout/Checkout";
import Bookings from "./Pages/Bookings/Bookings";
import Priveteroute from "./Routes/Priveteroute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: 'checkout/:id',
          element:<Priveteroute><Checkout></Checkout></Priveteroute>,
          loader: ({params}) =>fetch(`http://localhost:5000/services/${params.id}`)
        },{
          path:'/bookings',
          element:<Priveteroute><Bookings></Bookings></Priveteroute>
        }
      ]
    },
  ]);



  export default router;