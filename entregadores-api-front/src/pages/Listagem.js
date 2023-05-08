import Header from "../components/Header";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils"
import React, {useState,useEffect} from "react"
import axios from 'axios'
function Listagem() {

    const [entregadores,setEntregadores] = useState([])

    useEffect(()=> {
        const fetchData = async ()  => {
            await fetch('http://localhost:8080/entregadores', { 
                method:'GET',
                headers:{"Content-Type":'application/json'},
            }
            ).then(response => {
                if (response.status === 200 || response.status === 201) {
                    return response.json()
                }else {return response.json()}
            }).then(entregadores => {setEntregadores(entregadores) 
                alert(entregadores)}

            ).catch(ex => {
                alert(ex)
            })
          }
        fetchData()
    },[])



    return (
        <div>
            <Header></Header>
            <div>
                {entregadores.map(entregador => {
                    return(
                        <div key={entregador.id}>
                            <h2>{entregador.title}</h2>
                            <p>{entregador.dates}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
  }
  
export default Listagem;
  