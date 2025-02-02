import Navbar from '../components/Navbar';
import Intro from '../components/Intro_Section';
import VLine from '../components/Vertical_Line';
import FYear from '../components/First_Year';
import SYear from '../components/Second_Year';
import TYear from '../components/Third_Year';
import Contactme from '../components/Contact_Me';

const Home = () => {
   

    return (
        <div className="relative min-h-screen overflow-x-hidden text-white bg-black">
            {/* Navbar */}
            <Navbar />
            <VLine />


            {/* Content Sections */}
            <div className="ml-20">
                <Intro />
                <FYear />
                <SYear />
                <TYear />
                <Contactme />     
            </div>
        </div>
    );
};

export default Home;
