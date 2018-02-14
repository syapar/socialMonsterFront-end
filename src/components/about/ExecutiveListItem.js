import React from 'react';

const ExecutiveListItem = () => (
    <div className='executiveListItem'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-5 col-md-5 col-sm-12'>
                    <img className='profileImage' src='/images/team-images.png'/>
                </div>
                <div className='col-7 col-md-7 col-sm-12'>
                    <div className='fontBig'><b>TEAM NAME</b></div>
                    <div className='fontMedium'>POSITION</div>
                    <div className='fontSmall'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <div> <img className='linkedInButton' src='/images/icn_linkedin.svg'/> <img className='twitterButton' src='/images/icn_twitter.svg'/> </div>
                </div>
            </div>
        </div>
    </div>
);

export default ExecutiveListItem;