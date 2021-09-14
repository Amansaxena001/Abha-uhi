import BasicFooter from '@app/src/components/basic-footer';
import BasicNavbar from '@app/src/components/basic-navbar';
import CourseCard from '@app/src/components/course-cards';
import React from 'react';
import Link from 'next/link';
import Banner from './banner';
// import Gallery from './gallery-section/Gallery';
import HeroSection from './hero-section/HeroSection';
import Courses from './our-courses/Courses';
import styles from './styles.module.scss';

interface IProps {}

const Home: React.FC<IProps> = () => {
    return (
        <>
            <Link href="/feedback">
                <div className={styles.feedback}>Feedback</div>
            </Link>
            <div className="container">
                <BasicNavbar />
                <HeroSection />
            </div>
            <Banner />
            <div className="container">
                <Courses />
                <CourseCard />
            </div>
            <BasicFooter />
        </>
    );
};

export default Home;
