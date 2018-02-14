import React from 'react';

import OurLocationListItem from './OurLocationListItem';

const OurLocationsList = () => (
    <div className='row'>
        {
            getItems()
        }
    </div>
);

const getItems = () => {
    let items = [];
    for (let i = 0;i<2;i++) {
        items.push(<div key={i} className='col col-lg-6 col-md-6 col-xs-12'>
            <OurLocationListItem/>
        </div>);
    }
    return items;
};

export default OurLocationsList;