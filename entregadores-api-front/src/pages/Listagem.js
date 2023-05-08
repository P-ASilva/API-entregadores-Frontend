import Header from "../components/Header";
import Entregadores from "../components/Entregadores";
import React, {useState,useEffect} from "react"


function Listagem() {

    const [entregadores,setEntregadores] = useState([])

    useEffect(()=> {
        const fetchData = async ()  => {
            await fetch('http://localhost:8080/entregador', { 
                method:'GET',
                headers:{"Content-Type":'application/json'},
            }
            ).then(response => {
                if (response.status === 200 || response.status === 201) {
                    return response.json()
                }else {return response.json()}
            }).then(entregadores => {setEntregadores(entregadores) 
                setEntregadores(entregadores)
                alert(JSON.stringify(entregadores))
            }
            ).catch(ex => {
                alert(ex)
            })
          }
        fetchData()
    },[])



    return (
        <div>
            <Header></Header>
            <Entregadores></Entregadores>
        </div>
    );
}
  
export default Listagem;