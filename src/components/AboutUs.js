import React from 'react';

import Header from './about/Header';
import Footer from './about/Footer';
import ExecutiveList from './about/ExecutiveList';
import TheWiderList from './about/TheWiderList';
import OurLocationsList from './about/OurLocationsList';
import JobsPanel from './about/JobsPanel';

const AboutUs = () => (
    <div className='container'>
        <Header/>
        <div className='row'>
            <div className='col introductionText'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
        </div>
        <div className='row'>
            <div className='col executiveTeamText'>
                EXECUTIVE TEAM
            </div>
        </div>
        <ExecutiveList/>
        <div className='row'>
            <div className='col theWiderTeamText'>
                THE WIDER TEAM
            </div>
        </div>
        <TheWiderList/>
        <div className='row'>
            <div className='col ourLocationText'>
                OUR LOCATIONS
            </div>
        </div>
        <OurLocationsList/>
        <JobsPanel/>
        <Footer/>
    </div>
);

export default AboutUs;