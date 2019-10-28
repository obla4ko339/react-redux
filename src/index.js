import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import Messenger from './components/Messenger'
import {store} from './store'
import {MessagerContainer} from './containers'


ReactDOM.render(
    <Provider store={store}>
        <MessagerContainer/>
    </Provider>
    , document.getElementById('root'));

