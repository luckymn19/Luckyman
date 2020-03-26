import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Home from './pages/Home.js'
import Portfolio from './pages/Portfolio.js';
import Blog from './pages/Blog.js';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/blog" component={Blog} />
            </Switch>
        </BrowserRouter>
    )
}
export default App;