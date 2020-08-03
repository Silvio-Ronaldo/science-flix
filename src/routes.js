import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/CadastroVideo';
import PaginaInvalida from './pages/PaginaInvalida';
import CadastroCategoria from './pages/CadastroCategoria';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cadastro/video" exact component={CadastroVideo} />
                <Route path="/cadastro/categoria" exact component={CadastroCategoria} />
                <Route component={PaginaInvalida} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;