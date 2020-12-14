import React, { Component } from 'react'
import api from '../services/api'
import BotaoLike from '../components/BotaoLike';
import {Link} from 'react-router-dom'

import {
    Container,
    Title,
    ButtonTable,
    Table,
    Actions,
    LikeButton,
    LikeDislike,
    Button
  } from "./style";


export default class Funcionarios extends Component {

    state = {
        image: File,
        nome: '',
        funcao: '',
        departamento: '',
        email: '',
        telefone: '',
        list: [],
        funcionarioInfo: {},
        page: 1,
        idAlterar: ''
    }
   
    async componentDidMount(page = 1) {
        const response = await api.get(`/funcionario?page=${page}`)
        console.log(response.data)
        const { docs, ...funcionarioInfo } = response.data
        this.setState({ list: docs, funcionarioInfo, page })
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

    nextPage = () => {
        const { page, funcionarioInfo } = this.state
        if (page === funcionarioInfo.pages) return;
        const pageNumber = page + 1
        this.componentDidMount(pageNumber)
    }
    
    prevPage = () => {
        const { page } = this.state
        if (page === 1) return;
        const pageNumber = page - 1
        this.componentDidMount(pageNumber)
    }

    handleDelete = async id => {
        const { page } = this.state
        if (window.confirm('Tem certeza (S/N)?')) {
            await api.delete(`/funcionario/${id}`)
            this.componentDidMount(page)
        }
    }

    handleLike = () => {
        let likeBtn = document.getElementById('curtir').innerHTML;
        likeBtn++;
        document.getElementById('curtir').innerHTML = likeBtn;
    }

    handleDislike = () => {
        let dislikeBtn = document.getElementById('descurtir').innerHTML;
        dislikeBtn++;
        document.getElementById('descurtir').innerHTML = dislikeBtn;
    }
    

    render() {

        const { list, page, funcionarioInfo } = this.state

        return (
            <Container>
                <Title>Funcionários Cadastrados</Title> 
                <Table>
                    <thead>
                        <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map (funcio => (
                            <tr key={funcio._id}>
                                <td width = "30%"><img src={`http://localhost:3333/files/${funcio.image}`} alt='' /></td>     
                                <td>
                                    <Table>
                                        <tr>
                                            <th>Nome</th>
                                            <td>{funcio.nome}</td>
                                        </tr>
                                        <tr>
                                            <th>Função</th>
                                            <td>{funcio.funcao}</td>
                                        </tr>
                                        <tr>
                                            <th>Departamento</th>
                                            <td>{funcio.departamento}</td>
                                        </tr>
                                        <tr>
                                            <th>E-mail</th>
                                            <td>{funcio.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Telefone</th>
                                            <td>{funcio.telefone}</td>
                                        </tr>
                                        <tr>
                                            <BotaoLike>
                                            </BotaoLike>
                                        </tr>
                                    </Table>
                                </td>                                                                         
                                <td>        
                                    <ButtonTable onClick={() => this.handleDelete(funcio._id)} tipo="del">Excluir</ButtonTable>
                                </td>
                                <td>
                                    <Link to={`/listafuncionario/${funcio._id}`}>
                                        <ButtonTable type="button" className="btn btn-info">Detalhes</ButtonTable>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Actions>
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === funcionarioInfo.pages} onClick={this.nextPage}>Próximo</button>
                </Actions>
        </Container>
        )
    }
}