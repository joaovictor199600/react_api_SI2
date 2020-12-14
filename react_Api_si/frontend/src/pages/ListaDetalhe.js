import React, { Component } from 'react'
import api from '../services/api'
import BotaoLike from '../components/BotaoLike';

import {
    Container,
    Title,
    ButtonTable,
    Table
  } from "./style";


export default class Funcionarios extends Component {

    state = {
        image: File,
        nome: '',
        funcao: '',
        departamento: '',
        email: '',
        telefone: '',
    }
   
    async componentWillMount() {
        const response = await api.get(`/listafuncionario/${this.props.match.params.id}`)
        console.log(response.data)
        const { id, image, nome, funcao, departamento, email, telefone } = response.data
        this.setState({ id, image, nome, funcao, departamento, email, telefone })
        console.log(this.state)
        console.log(this.state.nome)
        //Com Axios, as informações dos registros ficam dentro do data
        this.setState({
            image: '',
            nome: '',
            funcao: '',
            departamento: '',
            email: '',
            telefone: ''
        })
    }


    handleDelete = async id => {
        const { } = this.state
        if (window.confirm('Tem certeza (S/N)?')) {
            await api.delete(`/funcionario/${id}`)
            this.componentDidMount()
        }
    }

    render() {
        const { nome, image, funcao, departamento, email, telefone } = this.state

        return (
            <Container>
                <Title>Funcionário</Title> 
                <Table>
                    <thead>
                        <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td width = "30%"><img src={`http://localhost:3333/files/${this.state.image}`} alt='' /></td>     
                                <td>
                                    <Table>
                                        <tr>
                                            <th>Nome</th>
                                            <td>{this.state.nome}</td>
                                        </tr>
                                        <tr>
                                            <th>Função</th>
                                            <td>{this.state.funcao}</td>
                                        </tr>
                                        <tr>
                                            <th>Departamento</th>
                                            <td>{this.state.departamento}</td>
                                        </tr>
                                        <tr>
                                            <th>E-mail</th>
                                            <td>{this.state.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Telefone</th>
                                            <td>{this.state.telefone}</td>
                                        </tr>
                                        <tr>
                                            <BotaoLike>
                                            </BotaoLike>
                                        </tr>
                                    </Table>
                                </td>                                                                         
                                <td>        
                                    <ButtonTable onClick={() => this.state.handleDelete(this.state._id)} tipo="del">Excluir</ButtonTable>
                                </td>
                            </tr>
                    </tbody>
                </Table>
        </Container>
        )
    }
}