import BasicFooter from '@app/src/components/basic-footer';
import BasicNavbar from '@app/src/components/basic-navbar';
import React from 'react';
import Banner from './banner';
// import Gallery from './gallery-section/Gallery';
import HeroSection from './hero-section/HeroSection';
import Courses from './our-courses/Courses';

interface IProps {}

const Home: React.FC<IProps> = () => {
    return (
        <>
            <div className="container">
                <BasicNavbar />
                <HeroSection />
            </div>
            <Banner />
            <div className="container">
                <Courses />
            </div>
            <BasicFooter />
        </>
    );
};

export default Home;
