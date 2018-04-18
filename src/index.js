import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

// Components
import App from './App';

// Stores
import authStore from './stores/authStore';
import channelsStore from './stores/ChannelsStore';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App authStore={authStore} channelsStore={channelsStore} />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
