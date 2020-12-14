import React, { Component } from 'react'
import api from '../services/api'
import {Link} from 'react-router-dom'

import {
    Container,
    Title,
    FormColumn,
    InputColumn,
    Label,
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
    handleSubmit = async e => {
        e.preventDefault();
        const { image, nome, funcao, departamento, email, telefone, list} = this.state

        const config = {
            header: {
              "Content-Type": "multipart/form-data"
            }
          };

          const input_data = {
            nome,
            funcao,
            departamento,
            email,
            telefone,
          };
      
          const form_data = new FormData();
      
          form_data.append("image", image);
      
          Object.entries(input_data).forEach(([key, value], index) => {
            form_data.append(key, value);
          });

          console.log(form_data);
          console.log('oi');

        const response = await api.post('/', form_data, config);
        
        //Com Axios, as informações dos registros ficam dentro do data
        this.setState({
            list: [ ...list, response.data],
            image: '',
            nome: '',
            funcao: '',
            email: '',
            telefone: '',
            departamento: 0
        });
    }    

    // async componentDidMount(page = 1) {
    //     const response = await api.get(`/livro?page=${page}`)
    //     console.log(response.data)
    //     const { docs, ...livroInfo } = response.data
    //     this.setState({ list: docs, livroInfo, page })
    //     //Com Axios, as informações dos registros ficam dentro do data
    //     this.setState({
    //         image: '',
    //         nome: '',
    //         funcao: '',
    //         email: '',
    //         telefone: '',
    //         departamento: 0
    //     })
    // }

    render() {

        const { nome, funcao, email, departamento, telefone} = this.state

        return (
            <Container>

                <Title>Cadastro de funcionários</Title>
                <FormColumn onSubmit={this.handleSubmit} method="POST" enctype="multipart/form-data" >
                    
                    <InputColumn
                        type="file"
                        name="image"
                        id="image"
                        className="form-control-file"    
                        onChange = { (e) => this.setState({ image: e.target.files[0] })}
                    />

                    <Label>Digite o nome do funcionário</Label>
                    <InputColumn
                        type="text"
                        name="nome"
                        id="nome"
                        maxLength = "100"
                        minLength = "3" 
                        required="required"
                        placeholder="Nome"
                        value={nome}
                        onChange = { e => this.setState({ nome: e.target.value })}
                    />

                    <Label>Digite a função do funcionário</Label>
                    <InputColumn
                        type="text"
                        name="funcao"
                        id="funcao"
                        maxLength = "100"
                        minLength = "3" 
                        required="required"
                        placeholder="Função"
                        value={funcao}
                        onChange = { e => this.setState({ funcao: e.target.value })}
                    />
                    <Label>Digite o e-mail do funcionário</Label>
                    <InputColumn
                        type="text"
                        name="email"
                        id="email"
                        maxLength = "100"
                        minLength = "3" 
                        required="required"
                        placeholder="E-mail"
                        value={email}
                        onChange = { e => this.setState({ email: e.target.value })}
                    />

                    <Label>Digite o telefone do funcionário</Label>
                    <InputColumn
                        type="text"
                        name="telefone"
                        id="telefone"
                        maxLength = "20"
                        minLength = "8" 
                        required="required"
                        placeholder="Telefone"
                        value={telefone}
                        onChange = { e => this.setState({ telefone: e.target.value })}
                    />

                    <Label>Digite o departamento do funcionário</Label>
                    <InputColumn
                        type="text"
                        name="Páginas"
                        id="departamento"
                        minLength = "1"
                        maxLength = "100"                  
                        required="required"
                        placeholder="Departamento"
                        value={departamento}                   
                        onChange = { e => this.setState({ departamento: e.target.value })}
                    />

                    <div>
                        <Button type="submit" tipo="add">
                            Salvar
                        </Button>                    
                        <Button tipo="remove">Cancelar</Button>
                    </div>
                </FormColumn>
        </Container>
        )
    }
    
}