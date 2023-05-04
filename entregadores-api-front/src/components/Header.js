import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'

function Header() {
  var name = localStorage.getItem('name')
    return (
      <div className="Header">
        <h1>Hello World, {name}</h1> 
        <div className='SwitchMui'>
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="Pronto para entrega!" />
          </FormGroup>
        </div>
      </div>
      
    );
  }
  
  export default Header;
  