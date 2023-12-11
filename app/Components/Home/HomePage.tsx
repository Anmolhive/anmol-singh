import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LucysBackground from '../LucysBackgroud/LucysBackground';
import Slider from '../Slider/Slider';
import TimeLine from '../TimeLine/TimeLine';
import Work from '../Work/Work';
import Banner from './Banner/Banner';
import SeconSection from './SecondSection/SeconSection';

const HomePage = () => {
    return (
        <>
            <Header />
            <Banner />
            <div className="relative">
                <SeconSection />
            </div>
            <div className="relative">
                <AboutMe />
            </div>
            <div className="relative">
                <TimeLine />
            </div>
            <div className="relative">
                <Work />
            </div>
            <div className="relative overflow-hidden">
                <Footer />
            </div>
        </>
    )
}

export default HomePage