import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-fela';

import App from './components/App'

module.exports = function render(felaRenderer) {
    const content = renderToString(
        <Provider renderer={felaRenderer}>
            <App />
        </Provider>
    )

    return { content }
}