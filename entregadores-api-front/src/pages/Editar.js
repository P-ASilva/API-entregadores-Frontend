import Header from "../components/Header";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils"
import { format } from "path";
import React, {useState,useEffect} from "react"


function Editar() {
  const nome = localStorage.getItem('nome');
  
  useEffect(()=> {
    const fetchData = async ()  => {
        await fetch('http://localhost:8080/entregador/nome/{nome}'.format(nome), { 
            method:'GET',
            headers:{"Content-Type":'application/json'},
        }
        ).then(response => {
            if (response.status === 200 || response.status === 201) {
                return response.json()
            }else {return response.json()}
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
  