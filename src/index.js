import React, { Component } from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBMTaLVcA8YJRSxVJ4RxUta-LcS3FM6TYg';
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
        );
}


ReactDom.render(<App />, document.querySelector('.container'));