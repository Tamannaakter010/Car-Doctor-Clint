import { createBrowserRouter } from 'react-router-dom';

import Main from '../layout/Main';
import Home from '../pages/home/Home';
import SignIn from '../pages/home/SignIn/SignIn';
import SignUp from '../pages/home/SignUp/SignUp';

import Bookings from '../pages/Bookings/Bookings';
import Checkout from '../pages/home/Checkout/Checkout';



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signin',
                element: <SignIn />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/checkout/:id',
                element: <Checkout />,
                loader:({params})=>fetch(`http://localhost:5000/sproducts/${params.id}`)
            },
            {
                path: '/bookings/:id',
                element: <Bookings />,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            }
            
            
        
        ]
    }
]);

export default router;
