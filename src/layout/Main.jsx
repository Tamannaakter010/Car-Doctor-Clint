import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer.jsx';
import Navbar from '../shared/Navbar.jsx';


const Main = () => {
    return (
        <div>
                <Navbar /> 
            <Outlet /> 
                 
             <Footer />   
               </div>
    );
};

export default Main;