import './App.css';
import Cadastro from './pages/Cadastro';
import Test from './pages/Test';
import { Link, Route, Routes } from 'react-router-dom';

function App() {

  return (  
    <div className="App">
      <Routes>
        <Route path='/cadastro' element={<Cadastro/>}></Route>
        <Route path='/test' element={<Test/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
