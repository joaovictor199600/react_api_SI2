import styled from 'styled-components';

export const Container = styled.div`
  display: flex; /* Informa que o componente sera do tipo flex */
  flex-direction: column; /* Indica que a horientação será em coluna (vertical)*/
  align-items: center; /* alinha no centro horizontal*/
  justify-content: center; /* alinha no centro vertical */
  padding: 2em;
`;

export const Title = styled.h1`
  font-size: 1.6em;
  font-weight: 800;
  margin: 1em 0;
`;
export const Label = styled.h2`
  font-size: 20px;
  font-weight: 400;
  margin: 1em 0;
`;

export const LikeButton = styled.button`
  cursor: pointer;
  padding: 13px 16px;
  img {
    height: 20px;
    border-right: 10px;
  }
  border: 0.5px solid red;
  border-radius: 8px;
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;

  .numberl:before {
    content: '0';
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    margin-left: 7px;
  }
`;

export const LikeDislike = styled.div`
`;  


export const Button = styled.button`
  /* Transforma o texto em maiusculo */
  text-transform: uppercase; 
  font-weight: 700; /* Deixa o texto em negrito */
  padding: 0.8em;
  margin: 1em;
  border: none;
  border-radius: 8px;
  color: #fff;
  /* se o bottao possuir a proprieda add ele recebe uma cor, senão recebe outra*/
  background: ${props => (props.tipo === "add" ? "#47cf73" : "#F05D5E")};

  /* o mesmo que o anterior, mas para botões cujo mouse está em cima */
  &:hover {
    background: ${props => (props.tipo === "add" ? "#248c46" : "#d31415")};
  }
`;


export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  button {
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    border: 0;
    background: #da552f;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin-right: 10px;
    cursor: pointer;

    /* &:hover {
      opacity: 0.7;
    } */

    &[disabled] {
      opacity: 0.5;
      cursor: default;
    }
  }`


  


