import React from "react";
import { hydrate } from 'react-dom';
import { createRenderer } from 'fela';	
import { Provider } from 'react-fela';

import App from './components/App'

const renderer = createRenderer();

hydrate(
    <Provider renderer={renderer}>	
        <App />	
    </Provider>,
    document.getElementById("app"));