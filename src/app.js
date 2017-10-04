import React from 'react';
import { render } from 'react-dom';

window.React = React;

render(
    (
        <div>
            <h1>Hello from react !!!</h1>
        </div>
    ),
    document.getElementById('root')
);