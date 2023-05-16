import Header from "../components/Header";
import React, {useState,useEffect} from "react"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { cpf } from 'cpf-cnpj-validator';

function Editar() {
  const name = localStorage.getItem('nome');
  const [entregador,setEntregador] = useState([])
  const theme = createTheme();
  const navigate = useNavigate()

  useEffect(()=> { 
    const fetchData = async ()  => {
        await fetch('http://localhost:8080/entregador/' + name, { 
            method:'GET',
            headers:{"Content-Type":'application/json'},
        }
        ).then(response => {
          
            if (response.status === 200 || response.status === 201) {
                return response.json()
            }else {
              alert(response)
              return response.json()
            }
        }).then(entregador => {
            setEntregador(entregador)
            alert(JSON.stringify(entregador))
        }
        ).catch(ex => {
            alert(ex)
        })
        }
    fetchData()
  },[])

  // const handleClick = (event)  => {
  //   event.preventDefault();
  //   const formdata = new FormData(event.currentTarget)
  //   const data = {
  //     'nome': formdata.get('nome'),
  //     'cpf': formdata.get('cpf'),
  //     'tipo_veiculo': formdata.get('tipo_veiculo'),
  //     'preco_viagem': formdata.get('preco_viagem')
  //   };
  //   fetch('http://localhost:8080/entregador/', { 
  //       method:'PUT',
  //       headers:{"Content-Type":'application/json'},
  //       body: JSON.stringify(data)}
  //   ).then(response => {
  //       if (response.status===200 || response.status===201) {
  //           const c = (data.cpf)
  //           if (cpf.isValid(c)) {
  //             alert('Cadastro realizado com sucesso')
  //             localStorage.setItem('nome',data.nome)
  //             navigate('/test')
  //           } else {alert('Cpf invalido')}
  //       }
  //   }).catch(ex => {
  //       alert('Erro ao se cadastrar como entregador')
  //   })
  // }

  return (
    <div>
      <Header/>
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            EDITA
          </Typography>
          <Box component="form" noValidate /*onSubmit={handleClick}*/ sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="nome"
                  required
                  fullWidth
                  id="nome"
                  label="nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="tipo_veiculo"
                  label="tipo_veiculo"
                  type="tipo_veiculo"
                  id="tipo_veiculo"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cpf"
                  label="cpf"
                  type="Cpf"
                  id="cpf"
                  autoComplete="Cpf"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="preco_viagem"
                  label="preco_viagem"
                  type="preco_viagem"
                  id="preco_viagem"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Change
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
    );
  }
  
export default Editar;
  