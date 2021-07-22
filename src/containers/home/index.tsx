import BasicNavbar from '@app/src/components/basic-navbar';
import React from 'react'
import Gallery from './gallery-section/Gallery';
import HeroSection from './hero-section/HeroSection';
import Courses from './our-courses/Courses';

interface IProps {

}

const Home: React.FC<IProps> = ({ }) => {
  return (
    <div className="container">
      <BasicNavbar />
      <HeroSection />
      <Gallery />
      <Courses />
    </div>
  );
}

export default Home