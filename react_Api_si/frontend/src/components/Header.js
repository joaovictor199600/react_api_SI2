import React from 'react'
import {Link} from 'react-router-dom'

import {
    Button,
    Title
  } from "./style";
export default function Header() {
    return (
        <center>
            <Title>Cadastro de funcionários</Title>     
            
            <Link to='/'>
              <Button type="button" className="btn btn-info">Cadastrar</Button>
            </Link>
            <Link to='/listafuncionario'>
              <Button type="button" className="btn btn-info">Listar Todos</Button>
            </Link>
            
        </center>
    )
}