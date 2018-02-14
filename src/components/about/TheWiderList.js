import React from 'react';

import TheWiderListItem from './TheWiderListItem';

const TheWiderList = () => (
    <div className='row'>
        {
            getItems()
        }
    </div>
);


const getItems = () => {
    let items = [];
    for (let i = 0;i<12;i++) {
        items.push(<div key={i} className='col col-lg-2 col-md-3 col-xs-6'>
            <TheWiderListItem/>
        </div>);
    }
    return items;
};

export default TheWiderList;