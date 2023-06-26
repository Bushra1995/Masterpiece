import React from 'react'
import Laboratories from './Laboratories';
import ComplexNavbar from '../components/Header/Navbar';
import HotOffers from '../components/UI/HotOffers'
import Recommendations from '../components/UI/Recommendations';
import TestCards from './TestCards';

const Home = () => {
    return (
        <>
            <ComplexNavbar />
            <Laboratories />
            <HotOffers />
            {/* <TestCards /> */}
            {/* <Recommendations /> */}
        </>
    )
}

export default Home;