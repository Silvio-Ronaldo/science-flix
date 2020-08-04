import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import VideoRegister from './pages/VideoRegister';
import CategoryRegister from './pages/CategoryRegister';
import InvalidPage from './pages/InvalidPage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cadastro/video" exact component={VideoRegister} />
                <Route path="/cadastro/categoria" exact component={CategoryRegister} />
                <Route component={InvalidPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;