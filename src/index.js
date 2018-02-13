import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './utils/configureStore';
import { initFirebase } from './api/firebaseApi';
import './styles/App.css';

import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import { checkUserState } from './actions/userActions';
import { initSocialApis  } from './actions/socialApiActions';

const store = configureStore();
initFirebase();
store.dispatch(checkUserState());
store.dispatch(initSocialApis());

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
);
registerServiceWorker();
