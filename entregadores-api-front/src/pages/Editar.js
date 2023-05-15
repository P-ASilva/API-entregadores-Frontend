import Header from "../components/Header";
import React, {useState,useEffect} from "react"


function Editar() {
  const nome = localStorage.getItem('nome');
  const [entregador,setEntregador] = useState([])
  useEffect(()=> {
    const fetchData = async ()  => {
        await fetch('http://localhost:8080/entregador/nome/'+nome, { 
            method:'GET',
            headers:{"Content-Type":'application/json'},
        }
        ).then(response => {
            if (response.status === 200 || response.status === 201) {
                return response.json()
            }else {return response.json()}
        }).then(user => {
          setEntregador(user)
          alert(JSON.stringify(entregador))
        }).catch(ex => {
            alert(ex)
        })
      }
    fetchData()
  },[])

  return (
    <div>
      <Header/>
      <h1>Editando</h1>
    </div>
    );
  }
  
export default Editar;
  