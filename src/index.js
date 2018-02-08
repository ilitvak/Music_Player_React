
// Imported the core library called React
import React from 'react';

// We import ReactDom to display content on the dom.
import ReactDOM from 'react-dom';
const htmlContainer = document.querySelector('.container');

// Create a new component. This cmpt should produce some html
const App = () => {
    return <div>Hi!</div>
}

// Take this cmpts generated html and put it on the page (in the DOM) 

ReactDOM.render(<App />, htmlContainer);