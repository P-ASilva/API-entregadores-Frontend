import Header from "../components/Header";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils"
import React, {useState,useEffect} from "react"

function Editar() {

    const [name,setName] = useState()
    const [cpf,setCpf] = useState()
    const [veiculo,setVeiculo] = useState()

    const data = {
        'name':name,
        'cpf':cpf,
        'veiculo':veiculo
    }

    const handleClick = click  => {
        alert(name + ' ' + cpf + ' ' + veiculo + ' ' )
        fetch('http://localhost:3000/editar', { 
            method:'POST',
            headers:{"Content-Type":'application/json'},
            body: JSON.stringify(data)}
        ).then(response => {
            if (response.status===200) {
                alert('Editar realizado com sucesso')
            }
        }).catch(ex => {
            alert('Erro ao se cadastrar como entregador')
        })
    }

    return (
    <div>
      <Header />
        <div>
            Name: <input id='name' type='text' onChange={e => setName(e.target.value)}/>
            <br></br>
            CPF: <input id= 'cpf' type='text' onChange={e => setCpf(e.target.value)}/>
            <br></br>
            Veiculo: <input id= 'veiculo' type='text' onChange={e => setVeiculo(e.target.value)}/>
            <input type='button' onClick={handleClick} value="Enviar" ></input>
        </div> 
    </div>
    );
  }
  
  export default Editar;
  