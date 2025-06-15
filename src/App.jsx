import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Pokedex from '../pages/Pokedex';
import PokemonDetail from '../pages/PokemonDetail';
import NotFound from '../pages/NotFound';

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="/pokemon/:id" element={<PokemonDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
};

export default App;
