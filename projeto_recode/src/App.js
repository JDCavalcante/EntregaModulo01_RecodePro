import { 
  BrowserRouter,
  Routes,
  Route
 } from 'react-router-dom';

import Contato from './Pages/Contato';
import Home from './Pages/Home';
import Promocoes from './Pages/Promocoes';
import Sobre from './Pages/Sobre';
import Destino from './Pages/Destino';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Contato' element={<Contato/>}/>
        <Route path='/Sobre' element={<Sobre/>}/>
        <Route path='/Destino' element={<Destino/>}/>
        <Route path='/Promocoes' element={<Promocoes/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
