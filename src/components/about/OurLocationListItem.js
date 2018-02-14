import React from 'react';

const OurLocationListItem = () => (
    <div className='ourLocationListItem'>
        <div>
            <img className='profileImage' src='/images/IMG_location1.png'/>
        </div>
        <div className='fontBig'><b>LONDON</b></div>
        <div className='fontSmall'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        <div className='fontSmall'>
            Plum Guide London <br/> 2-4 Rufus Street, London,<br/>  N1 6PE<br/> <br/>  <u>View Map</u>
        </div>
    </div>
);

export default OurLocationListItem;