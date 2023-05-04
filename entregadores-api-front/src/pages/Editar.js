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
        fetch('http://localhost:4000/editar', { 
            method:'POST',
            headers:{"Content-Type":'application/json'},
            body: JSON.stringify(data)}
        ).then(response => {
            if (response.status===200) {
                alert('Edição realizada com sucesso')
            }
        }).catch(ex => {
            alert('Erro ao editar perfil')
        })
    }

    return (
    <div>
      <Header />
    </div>
    );
  }
  
  export default Editar;
  