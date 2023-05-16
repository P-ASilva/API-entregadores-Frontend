import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import { useNavigate } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import DeleteButton from "../components/DeleteButton";
import React, {useState,useEffect} from "react"

function Header() {
  var name = localStorage.getItem('nome')
  const navigate = useNavigate()
  const handleClick = click  => {
    fetch('http://localhost:3000/test', { 
        method:'GET',
        headers:{"Content-Type":'application/json'},
    }
    ).then(response => {
      alert(response)
        if (response.status === 200 || response.status === 201) {
          navigate('/editar')
        }
    }).catch(ex => {
        alert(ex)
    })

  }
  const handleClick2 = click  => {
    fetch('http://localhost:3000/test', { 
        method:'GET',
        headers:{"Content-Type":'application/json'},
    }
    ).then(response => {
        if (response.status === 200 || response.status === 201) {
            navigate('/test')
        }
    }).catch(ex => {
        alert(ex)
    })
  }

  return (
    <div className="Header">
      <IconButton aria-label="home" color="primary" onClick={handleClick2} className='home'>
        <HomeIcon />
      </IconButton>
      <div className = "text">
        <h1>Welcome, {name}</h1> 
      </div>
      <div className='SwitchMui'>
        <DeleteButton></DeleteButton>
        <IconButton aria-label="settings" color="primary" onClick={handleClick} padding='0%'>
          <SettingsIcon />
        </IconButton>
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked size="big"/>} label="I'm ready to work!" />
        </FormGroup>
      </div>
    </div>
    
  );
  }
  export default Header;
  