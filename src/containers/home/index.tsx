import BasicNavbar from '@app/src/components/basic-navbar';
import React from 'react'
import HeroSection from './hero-section/HeroSection';

interface IProps {

}

const Home: React.FC<IProps> = ({ }) => {
  return (
    <>
      <BasicNavbar />
      <HeroSection />
    </>
  );
}

export default Home