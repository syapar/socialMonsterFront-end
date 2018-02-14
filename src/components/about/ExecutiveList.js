import React from 'react';

import ExecutiveListItem from './ExecutiveListItem';

const ExecutiveList = () => (
    <div className='row'>
        {
            getItems()
        }
    </div>
);

const getItems = () => {
    let items = [];
    for (let i = 0;i<6;i++) {
        items.push(<div key={i} className='col col-lg-6 col-md-12 col-xs-12'>
            <ExecutiveListItem/>
        </div>);
    }
    return items;
};

export default ExecutiveList;