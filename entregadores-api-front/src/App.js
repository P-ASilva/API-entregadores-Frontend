import './App.css';
import SignUp from './pages/SignUp';
import Editar from './pages/Editar';
import Test from './pages/Test';
import { Link, Route, Routes } from 'react-router-dom';

function App() {

  return (  
    <div className="App">
      <Routes>
        <Route path='/cadastro' element={<SignUp/>}></Route>
        <Route path='/editar' element={<Editar/>}></Route>
        <Route path='/test' element={<Test/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
