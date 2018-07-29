import React from "react";
import ReactDOM from "react-dom";
import { createRenderer } from 'fela';
import { Provider } from 'react-fela'
import App from './components/App'

const renderer = createRenderer()

ReactDOM.render(
    <Provider renderer={renderer}>
        <App />
    </Provider>,
    document.getElementById("index"));