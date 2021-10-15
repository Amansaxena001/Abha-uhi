import BasicFooter from '@app/src/components/basic-footer';
import TopNotificationBar from '@app/src/components/basic-navbar/sticky-notify-bar';
import CourseCard from '@app/src/components/course-cards';
// import CourseCard from '@app/src/components/course-cards';
import React from 'react';
// import Link from 'next/link';
import Banner from './banner';
// import Gallery from './gallery-section/Gallery';
import HeroSection from './hero-section/HeroSection';
import Offerings from './offerings';
// import Courses from './our-courses/Courses';
import OurMission from './our-mission';
// import styles from './styles.module.scss';

interface IProps { }

const Home: React.FC<IProps> = () => {
    return (
        <>
            <TopNotificationBar />
            <HeroSection />
            <OurMission />
            <Banner />
            <div className="container">
                <CourseCard />
                <Offerings />
            </div>
            <BasicFooter />
        </>
    );
};

export default Home;