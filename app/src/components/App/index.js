import React from 'react';
import { hot } from 'react-hot-loader'

import Button from '../design/Button';

const App = () => {
    return (
        <div>
            <Button type="primary">Welcome</Button>
        </div>
    );
};

export default hot(module)(App)