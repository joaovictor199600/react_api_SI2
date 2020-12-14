import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Funcionario from './pages/Funcionario'
import ListaFuncionario from './pages/ListaFuncionario'
import ListaDetalhe from './pages/ListaDetalhe'

function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Funcionario} />
            <Route path='/funcionario' exact component={Funcionario} />
            <Route path='/listafuncionario' exact component={ListaFuncionario} />
            <Route path='/listafuncionario/:id' component={ListaDetalhe} />
        </Switch>
    )
}

export default Routes;
