import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contacts from '../Contacts/Contacts';
import Projects from '../Projects/Projects';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <About></About>
            <Contacts></Contacts>



        </div>
    );
};

export default Home;