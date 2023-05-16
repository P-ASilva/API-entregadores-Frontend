import DeleteIcon from '@mui/icons-material/Delete'; // works?
import IconButton from '@mui/material/IconButton';
import { json, useNavigate } from "react-router-dom";
import React, {useState,useEffect} from "react"

function DeleteButton() {
    const name = localStorage.getItem('nome');
    const navigate = useNavigate()
    const [data,setData] = useState([])

    useEffect(()=> {
        const fetchData = async ()  => {
            await fetch('http://localhost:3000/entregador/' + name, {
                method:'GET',
                headers:{"Content-Type":'application/json'},
            }).then(response => {
                if (response.status === 200 || response.status === 201) {
                    console.log(response.json())
                    return response.json()
                } else {alert(response.status)}
            }).then(data => {
                console.log(data.json())
                setData(data)
            setData(data)
            }).catch(ex => {
                alert('fetch error')
            })
        }
        fetchData()
    },[])

    // const handleClick = click  => {
        
    //     fetch('http://localhost:8080/entregador/', { 
    //         method:'DELETE',
    //         headers:{"Content-Type":'application/json'},
    //     }
    //     ).then(response => {
    //       alert('okay')
    //         if (response.status === 200 || response.status === 201) {
    //           navigate('/cadastro')
    //         } else {
    //             alert('oh shit 2')
    //         }
    //     }).catch(ex => {
    //         alert('oh shit')
    //     })
    
    // }

    return (
        <div>
            <IconButton aria-label="del" color="primary" /*onClick={handleClick}*/ className='DelButt'>
                <DeleteIcon/>
            </IconButton>
        </div>
    )
}
export default DeleteButton;