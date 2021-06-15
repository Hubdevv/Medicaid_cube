import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo,homeObjThree } from '../components/InfoSection/Data';
import Navbar from '../components/navbar';
import SideBar from '../components/SideBar';
import Services from '../components/Services'
import Footer from '../components/Footer';

const Home  = () => {
    const [isOpen, setIsOpen]= useState(false);
    const toggle  = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
     <SideBar isOpen= {isOpen} toggle={toggle}/>
     <Navbar toggle={toggle}/> 
     <HeroSection/>
     <Services />
     <InfoSection {...homeObjThree}/>
     <InfoSection {...homeObjOne}/>
     <InfoSection {...homeObjTwo}/>
     <Footer/>
     
        </>
    );
};

export default Home;