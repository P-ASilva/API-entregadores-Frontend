import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { cpf } from 'cpf-cnpj-validator';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Ass
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

  const navigate = useNavigate()

  const handleClick = (event)  => {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget)
    const data = {
      'nome': formdata.get('nome'),
      'cpf': formdata.get('cpf'),
      'tipo_veiculo': formdata.get('tipo_veiculo'),
      "preco_viagem": 50,
      "status_ocupacao": "DISPONIVEL",
      "status_utilizacao": "PENDENTE",
    };
    fetch('http://localhost:8080/entregador', { 
        method:'POST',
        headers:{"Content-Type":'application/json'},
        body: JSON.stringify(data)}
    ).then(response => {
        if (response.status===200 || response.status===201) {
            const c = (data.cpf)
            if (cpf.isValid(c)) {
              alert('Cadastro realizado com sucesso')
              localStorage.setItem('nome',data.nome)
              navigate('/test')
            } else {alert('Cpf invalido')}
        }
    }).catch(ex => {
        alert('Erro ao se cadastrar como entregador')
    })
  }

  return (
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleClick} sx={{ mt: 3 }}>
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
                  autoComplete="cpf"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}