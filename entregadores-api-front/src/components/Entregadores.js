import React, {useState,useEffect} from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function Entregadores() {

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
          }).then(entregadores => {
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
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {entregadores.map(entregador => {
                  return(
                      <div key={entregador.id}>
                          <ListItem alignItems="flex-start">
                              <ListItemAvatar>
                                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                              </ListItemAvatar>
                              <ListItemText
                                  primary={entregador.nome}
                                  secondary={
                                      <React.Fragment>
                                      <Typography
                                          sx={{ display: 'inline' }}
                                          component="span"
                                          variant="body2"
                                          color="text.primary"
                                      >
                                          {entregador.tipo_veiculo}
                                      </Typography>
                                      {' ' + (entregador.status_ocupacao)}
                                      </React.Fragment>
                                  }
                              />
                          </ListItem>
                          <Divider variant="inset" component="li" />
                      </div>
                  )
              })}
          </List>
      </div>
  );
}
export default Entregadores